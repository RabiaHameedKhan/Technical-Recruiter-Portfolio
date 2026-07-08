import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactEmail, hiringAutoReply, hiringRequestEmail } from "@/lib/email/templates";
import { contactFormSchema } from "@/lib/validations/contactFormSchema";
import { hireFormSchema } from "@/lib/validations/hireFormSchema";

const recentRequests = new Map<string, number>();

function rateLimited(ip: string) {
  const now = Date.now();
  const previous = recentRequests.get(ip) || 0;
  recentRequests.set(ip, now);
  return now - previous < 10_000;
}

function getTransporter() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass || !process.env.RECIPIENT_EMAIL) {
    throw new Error("Email environment variables are not configured.");
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass }
  });
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (rateLimited(ip)) {
      return NextResponse.json({ error: "Please wait a moment before submitting again." }, { status: 429 });
    }

    const body = await request.json();
    const formType = body?.formType;
    const transporter = getTransporter();
    const recipient = process.env.RECIPIENT_EMAIL as string;
    const from = process.env.GMAIL_USER as string;

    if (formType === "hire") {
      const parsed = hireFormSchema.safeParse(body);
      if (!parsed.success) {
        return NextResponse.json({ error: "Please check the required fields and try again." }, { status: 400 });
      }
      const data = parsed.data;

      await transporter.sendMail({
        from,
        to: recipient,
        replyTo: data.workEmail,
        subject: `New Hiring Request from ${data.companyName} - ${data.jobTitle}`,
        html: hiringRequestEmail(data)
      });

      await transporter.sendMail({
        from,
        to: data.workEmail,
        subject: "We've received your hiring request - NextHire",
        html: hiringAutoReply(data)
      });

      return NextResponse.json({ success: true });
    }

    if (formType === "contact") {
      const parsed = contactFormSchema.safeParse(body);
      if (!parsed.success) {
        return NextResponse.json({ error: "Please check the required fields and try again." }, { status: 400 });
      }
      const data = parsed.data;

      await transporter.sendMail({
        from,
        to: recipient,
        replyTo: data.email,
        subject: `New General Enquiry from ${data.name}`,
        html: contactEmail(data)
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Unsupported form type." }, { status: 400 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to send email.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
