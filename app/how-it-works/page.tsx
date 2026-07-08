import type { Metadata } from "next";
import { BriefcaseBusiness, ClipboardList, FileCheck2, MessagesSquare, Search, Send, UserCheck } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { faqs } from "@/data/faq";

export const metadata: Metadata = {
  title: "How It Works",
  description: "A clear step-by-step overview of the NextHire recruitment process."
};

const steps = [
  { icon: ClipboardList, title: "Employer submits the intake form", text: "Share the role, must-have skills, salary range, timeline, and hiring context." },
  { icon: MessagesSquare, title: "We review requirements within 24 hours", text: "We confirm scope, clarify tradeoffs, and align on search priorities." },
  { icon: Search, title: "We search our network and job channels", text: "We source actively, reach out to warm candidates, and screen inbound interest." },
  { icon: UserCheck, title: "We conduct initial screens", text: "We check experience, motivation, availability, communication, and role fit." },
  { icon: FileCheck2, title: "We deliver a shortlist", text: "You receive focused candidates with profiles, notes, and our recommendation." },
  { icon: BriefcaseBusiness, title: "You interview shortlisted candidates", text: "Your team runs final technical and culture interviews with stronger signal." },
  { icon: Send, title: "Offer made and candidate joins", text: "Commission is due only after a successful placement." }
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="theme-light section-padding pt-32">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <SectionHeading
              centered={false}
              eyebrow="How It Works"
              title="A Clear Process From Requirement to Hire"
              subtitle="Direct recruitment support designed to protect your time and improve shortlist quality."
            />
            <div
              className="min-h-[340px] overflow-hidden rounded-[2rem] border border-primary/20 bg-primary shadow-md"
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(19, 116, 116, 0.8), rgba(19, 116, 116, 0.05)), url('https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1100&q=85')",
                backgroundPosition: "center",
                backgroundSize: "cover"
              }}
              aria-label="Recruiters and hiring managers reviewing candidates together"
            />
          </div>
          <div className="mx-auto mt-16 max-w-4xl">
            {steps.map((step, index) => (
              <div key={step.title} className="relative grid gap-5 pb-10 md:grid-cols-[80px_1fr]">
                {index !== steps.length - 1 ? <div className="absolute left-9 top-16 hidden h-full w-px bg-primary/35 md:block" /> : null}
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary bg-primary text-white shadow-sm">
                  <step.icon className="h-7 w-7" />
                </div>
                <div className="premium-card rounded-2xl p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-violet-600">Step {index + 1}</p>
                  <h2 className="mt-2 text-xl font-bold text-gray-950">{step.title}</h2>
                  <p className="mt-3 leading-7 text-gray-600">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="theme-light section-padding">
        <div className="container-page max-w-4xl">
          <SectionHeading title="Frequently Asked Questions" subtitle="Practical answers before you submit a hiring request." />
          <Accordion type="single" collapsible className="premium-card mt-12 rounded-2xl px-6">
            {faqs.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
