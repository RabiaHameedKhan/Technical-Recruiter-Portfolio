import type { ContactFormValues } from "@/lib/validations/contactFormSchema";
import type { HireFormValues } from "@/lib/validations/hireFormSchema";

const recruiterName = "Amna Khan";
const recruiterEmail = "amna@example.com";
const linkedIn = "https://linkedin.com/in/amnakhan";

function escapeHtml(value?: string | number) {
  return String(value || "Not provided")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function line(label: string, value?: string | number) {
  return `<p><strong>${label}:</strong> ${escapeHtml(value)}</p>`;
}

export function hiringRequestEmail(data: HireFormValues) {
  return `
    <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
      <h1>NEW HIRING REQUEST</h1>
      <h2>--- EMPLOYER DETAILS ---</h2>
      ${line("Name", data.fullName)}
      ${line("Title", data.employerTitle)}
      ${line("Company", data.companyName)}
      ${line("Website", data.companyWebsite)}
      ${line("Email", data.workEmail)}
      ${line("Phone", data.phone)}
      ${line("Location", data.country)}
      <h2>--- ROLE DETAILS ---</h2>
      ${line("Position", data.jobTitle)}
      ${line("Number of Positions", data.numberOfPositions)}
      ${line("Employment Type", data.employmentType)}
      ${line("Work Mode", data.workMode)}
      ${line("Office Location", data.officeLocation)}
      ${line("Experience Required", data.experienceRequired)}
      ${line("Seniority", data.seniorityLevel)}
      ${line("Tech Stack / Skills", data.techStack)}
      ${line("Salary / Budget", data.salaryRange)}
      ${line("Hiring Deadline", data.hiringDeadline)}
      <h2>--- JOB DESCRIPTION ---</h2>
      <p>${escapeHtml(data.jobDescription)}</p>
      <h2>--- IDEAL CANDIDATE ---</h2>
      <p>${escapeHtml(data.idealCandidate)}</p>
      <h2>--- INTERVIEW PROCESS ---</h2>
      <p>${escapeHtml(data.interviewProcess)}</p>
      <h2>--- ADDITIONAL NOTES ---</h2>
      <p>${escapeHtml(data.additionalDetails)}</p>
      <h2>--- SOURCE ---</h2>
      ${line("How they found you", data.source)}
    </div>
  `;
}

export function hiringAutoReply(data: HireFormValues) {
  return `
    <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
      <p>Hi ${escapeHtml(data.fullName)},</p>
      <p>Thank you for sending your hiring request for ${escapeHtml(data.jobTitle)}. I've received the details and will review them carefully.</p>
      <p>I'll be in touch within 24 hours to confirm scope, timeline, and next steps.</p>
      <p>Warmly,<br />${recruiterName}<br /><a href="mailto:${recruiterEmail}">${recruiterEmail}</a><br /><a href="${linkedIn}">${linkedIn}</a></p>
    </div>
  `;
}

export function contactEmail(data: ContactFormValues) {
  return `
    <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
      <h1>New General Enquiry</h1>
      ${line("Name", data.name)}
      ${line("Email", data.email)}
      <h2>Message</h2>
      <p>${escapeHtml(data.message)}</p>
    </div>
  `;
}
