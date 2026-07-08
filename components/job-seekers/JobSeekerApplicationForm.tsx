"use client";

import type { FormEvent } from "react";
import { useRef, useState } from "react";
import { Loader2, UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";

const FORM_SUBMISSION_HANDLER = "[INSERT_FORM_SUBMISSION_HANDLER_HERE]";
const MAX_RESUME_SIZE = 5 * 1024 * 1024;
const ACCEPTED_RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
];

type Errors = Partial<Record<"fullName" | "positionAppliedFor" | "experience" | "resume" | "linkedIn", string>>;

function isValidLinkedInUrl(value: string) {
  try {
    const url = new URL(value);
    return ["http:", "https:"].includes(url.protocol) && url.hostname.toLowerCase().includes("linkedin.com");
  } catch {
    return false;
  }
}

function validateResume(file: File | undefined) {
  if (!file) return "Please upload your resume.";
  const extension = file.name.split(".").pop()?.toLowerCase();
  const acceptedExtension = extension ? ["pdf", "doc", "docx"].includes(extension) : false;
  if (!ACCEPTED_RESUME_TYPES.includes(file.type) && !acceptedExtension) {
    return "Resume must be a PDF, DOC, or DOCX file.";
  }
  if (file.size > MAX_RESUME_SIZE) {
    return "Resume must be 5MB or smaller.";
  }
  return "";
}

export function JobSeekerApplicationForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [experience, setExperience] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const resume = formData.get("resume") instanceof File ? (formData.get("resume") as File) : undefined;
    const linkedIn = String(formData.get("linkedIn") || "").trim();
    const nextErrors: Errors = {};

    if (!String(formData.get("fullName") || "").trim()) nextErrors.fullName = "Please enter your full name.";
    if (!String(formData.get("positionAppliedFor") || "").trim()) nextErrors.positionAppliedFor = "Please enter the position.";
    if (!experience) nextErrors.experience = "Please select your experience.";
    const resumeError = validateResume(resume);
    if (resumeError) nextErrors.resume = resumeError;
    if (!linkedIn) nextErrors.linkedIn = "Please enter your LinkedIn profile link.";
    if (linkedIn && !isValidLinkedInUrl(linkedIn)) nextErrors.linkedIn = "Please enter a valid LinkedIn URL.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    formData.set("experience", experience);
    setIsSubmitting(true);

    try {
      const response = await fetch(FORM_SUBMISSION_HANDLER, {
        method: "POST",
        body: formData
      });

      if (!response.ok) throw new Error("Submission failed");

      toast({
        title: "Application submitted",
        description: "Thanks for applying. The NextHire team will review your details."
      });
      formRef.current?.reset();
      setExperience("");
    } catch {
      setErrors({ resume: "Submission handler is not configured yet. Please add your API route or email service URL." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="mx-auto mt-12 grid max-w-3xl gap-6 rounded-2xl border border-primary/25 bg-white p-6 shadow-sm md:grid-cols-2 md:p-8" noValidate>
      <div className="space-y-2">
        <Label htmlFor="fullName">Full Name</Label>
        <Input id="fullName" name="fullName" autoComplete="name" aria-invalid={!!errors.fullName} required />
        {errors.fullName ? <p className="text-sm font-medium text-violet-700">{errors.fullName}</p> : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="positionAppliedFor">Position Applied For</Label>
        <Input id="positionAppliedFor" name="positionAppliedFor" aria-invalid={!!errors.positionAppliedFor} required />
        {errors.positionAppliedFor ? <p className="text-sm font-medium text-violet-700">{errors.positionAppliedFor}</p> : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="experience">Experience</Label>
        <select
          id="experience"
          name="experience"
          value={experience}
          onChange={(event) => setExperience(event.target.value)}
          className="flex min-h-11 w-full rounded-xl border border-primary/25 bg-white px-4 py-3 text-sm text-gray-950 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-invalid={!!errors.experience}
          required
        >
          <option value="">Select experience</option>
          {["0-1 yr", "1-3 yrs", "3-5 yrs", "5+ yrs"].map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        {errors.experience ? <p className="text-sm font-medium text-violet-700">{errors.experience}</p> : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="linkedIn">LinkedIn Profile Link</Label>
        <Input id="linkedIn" name="linkedIn" type="url" placeholder="https://linkedin.com/in/your-profile" aria-invalid={!!errors.linkedIn} required />
        {errors.linkedIn ? <p className="text-sm font-medium text-violet-700">{errors.linkedIn}</p> : null}
      </div>

      <div className="space-y-2 md:col-span-2">
        <Label htmlFor="resume">Resume Upload</Label>
        <label className="flex min-h-32 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-primary/40 bg-violet-50 px-4 py-6 text-center transition-colors hover:border-primary hover:bg-white">
          <UploadCloud className="mb-3 h-8 w-8 text-primary" />
          <span className="text-sm font-semibold text-gray-950">Upload PDF, DOC, or DOCX resume</span>
          <span className="mt-1 text-xs text-gray-500">Maximum file size: 5MB</span>
          <Input id="resume" name="resume" type="file" accept=".pdf,.doc,.docx" className="mt-4 max-w-sm bg-white" aria-invalid={!!errors.resume} required />
        </label>
        {errors.resume ? <p className="text-sm font-medium text-violet-700">{errors.resume}</p> : null}
      </div>

      <Button type="submit" size="lg" className="md:col-span-2" disabled={isSubmitting}>
        {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : null}
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  );
}
