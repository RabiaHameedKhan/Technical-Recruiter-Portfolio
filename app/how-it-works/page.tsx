import type { Metadata } from "next";
import { BriefcaseBusiness, ClipboardList, FileCheck2, MessagesSquare, Search, Send, UserCheck } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { faqs } from "@/data/faq";

export const metadata: Metadata = {
  title: "How It Works",
  description: "A clear step-by-step overview of Amna Khan's independent technical recruiting process."
};

const steps = [
  { icon: ClipboardList, title: "Employer submits the intake form", text: "Share the role, must-have skills, salary range, timeline, and hiring context." },
  { icon: MessagesSquare, title: "I review requirements within 24 hours", text: "I confirm scope, clarify tradeoffs, and align on search priorities." },
  { icon: Search, title: "I search my network and job channels", text: "I source actively, reach out to warm candidates, and screen inbound interest." },
  { icon: UserCheck, title: "I conduct initial screens", text: "I check experience, motivation, availability, communication, and role fit." },
  { icon: FileCheck2, title: "I deliver a shortlist", text: "You receive 3-5 candidates with profiles, notes, and my recommendation." },
  { icon: BriefcaseBusiness, title: "You interview shortlisted candidates", text: "Your team runs final technical and culture interviews with stronger signal." },
  { icon: Send, title: "Offer made and candidate joins", text: "I earn commission only after a successful placement." }
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="theme-light section-padding pt-32">
        <div className="container-page">
          <SectionHeading eyebrow="How It Works" title="A Clear Process From Requirement to Hire" subtitle="Direct recruiting support without agency complexity, designed to protect your time and improve shortlist quality." />
          <div className="mx-auto mt-16 max-w-4xl">
            {steps.map((step, index) => (
              <div key={step.title} className="relative grid gap-5 pb-10 md:grid-cols-[80px_1fr]">
                {index !== steps.length - 1 ? <div className="absolute left-9 top-16 hidden h-full w-px bg-[#EDE5FF] md:block" /> : null}
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#F5F0FF] bg-[#4A0E4E] text-[#F5F0FF] shadow-sm">
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
