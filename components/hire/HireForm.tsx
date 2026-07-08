"use client";

import { cloneElement, isValidElement, useId, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { FormSection } from "@/components/hire/FormSection";
import { SuccessState } from "@/components/hire/SuccessState";
import { hireFormSchema, type HireFormValues } from "@/lib/validations/hireFormSchema";
import { cn } from "@/lib/utils";

const defaultValues: HireFormValues = {
  fullName: "",
  employerTitle: "",
  companyName: "",
  companyWebsite: "",
  workEmail: "",
  phone: "",
  country: "",
  jobTitle: "",
  numberOfPositions: 1,
  employmentType: "",
  workMode: "",
  officeLocation: "",
  experienceRequired: "",
  seniorityLevel: "",
  techStack: "",
  salaryRange: "",
  hiringDeadline: "",
  jobDescription: "",
  idealCandidate: "",
  additionalDetails: "",
  source: "",
  formType: "hire"
};

function Field({
  label,
  error,
  children,
  className
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const id = useId();
  const errorId = `${id}-error`;
  const child =
    isValidElement(children) && typeof children.type !== "string"
      ? cloneElement(children as React.ReactElement<{ id?: string; "aria-describedby"?: string }>, {
          id,
          "aria-describedby": error ? errorId : undefined
        })
      : children;

  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={id}>{label}</Label>
      {child}
      {error ? (
        <p id={errorId} className="text-sm font-medium text-violet-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function SelectField({
  id,
  control,
  name,
  placeholder,
  items
}: {
  id?: string;
  control: ReturnType<typeof useForm<HireFormValues>>["control"];
  name: keyof HireFormValues;
  placeholder: string;
  items: string[];
}) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Select value={String(field.value || "")} onValueChange={field.onChange}>
          <SelectTrigger id={id} aria-label={placeholder}>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {items.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    />
  );
}

export function HireForm() {
  const [serverError, setServerError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting }
  } = useForm<HireFormValues>({
    resolver: zodResolver(hireFormSchema),
    defaultValues
  });

  async function onSubmit(values: HireFormValues) {
    setServerError("");
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });
    const result = await response.json();
    if (!response.ok || !result.success) {
      setServerError(result.error || "Something went wrong. Please try again.");
      return;
    }
    toast({
      title: "Hiring request submitted",
      description: "Thank you! Our team will be in touch within 24 hours."
    });
    setSubmitted(true);
  }

  if (submitted) return <SuccessState />;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
      <FormSection title="Your Details" description="Tell us who you are and where our team can follow up.">
        <Field label="Your Full Name" error={errors.fullName?.message}>
          <Input aria-invalid={!!errors.fullName} {...register("fullName")} />
        </Field>
        <Field label="Your Job Title / Role" error={errors.employerTitle?.message}>
          <Input aria-invalid={!!errors.employerTitle} {...register("employerTitle")} />
        </Field>
        <Field label="Company Name" error={errors.companyName?.message}>
          <Input aria-invalid={!!errors.companyName} {...register("companyName")} />
        </Field>
        <Field label="Company Website" error={errors.companyWebsite?.message}>
          <Input type="url" placeholder="https://example.com" aria-invalid={!!errors.companyWebsite} {...register("companyWebsite")} />
        </Field>
        <Field label="Email" error={errors.workEmail?.message}>
          <Input type="email" aria-invalid={!!errors.workEmail} {...register("workEmail")} />
        </Field>
        <Field label="Phone / WhatsApp" error={errors.phone?.message}>
          <Input type="tel" {...register("phone")} />
        </Field>
        <Field label="Country / Location" error={errors.country?.message}>
          <Input aria-invalid={!!errors.country} {...register("country")} />
        </Field>
      </FormSection>

      <FormSection title="The Role You're Hiring For" description="Share the core role information so we can qualify candidates accurately.">
        <Field label="Job Title / Position" error={errors.jobTitle?.message}>
          <Input aria-invalid={!!errors.jobTitle} {...register("jobTitle")} />
        </Field>
        <Field label="Number of Positions" error={errors.numberOfPositions?.message}>
          <Input type="number" min={1} aria-invalid={!!errors.numberOfPositions} {...register("numberOfPositions")} />
        </Field>
        <Field label="Employment Type" error={errors.employmentType?.message}>
          <SelectField control={control} name="employmentType" placeholder="Select employment type" items={["Full-time", "Part-time", "Contract", "Freelance"]} />
        </Field>
        <Field label="Work Mode" error={errors.workMode?.message}>
          <SelectField control={control} name="workMode" placeholder="Select work mode" items={["Remote", "Hybrid", "On-site"]} />
        </Field>
        <Field label="Office Location (if applicable)" error={errors.officeLocation?.message}>
          <Input {...register("officeLocation")} />
        </Field>
        <Field label="Years of Experience Required" error={errors.experienceRequired?.message}>
          <SelectField control={control} name="experienceRequired" placeholder="Select experience" items={["0-1 years", "1-3 years", "3-5 years", "5-10 years", "10+ years"]} />
        </Field>
        <Field label="Seniority Level" error={errors.seniorityLevel?.message}>
          <SelectField control={control} name="seniorityLevel" placeholder="Select seniority" items={["Junior", "Mid-Level", "Senior", "Lead", "Manager", "Director"]} />
        </Field>
        <Field label="Hiring Deadline" error={errors.hiringDeadline?.message}>
          <Input type="date" aria-invalid={!!errors.hiringDeadline} {...register("hiringDeadline")} />
        </Field>
        <Field label="Required Tech Stack & Skills" error={errors.techStack?.message} className="md:col-span-2">
          <Textarea aria-invalid={!!errors.techStack} placeholder="Must-have vs. nice-to-have skills" {...register("techStack")} />
        </Field>
        <Field label="Salary / Budget Range" error={errors.salaryRange?.message} className="md:col-span-2">
          <Input placeholder="Market competitive, $80k-$100k, etc." {...register("salaryRange")} />
        </Field>
      </FormSection>

      <FormSection title="Role Details" description="A bit more context helps us screen for stronger fit.">
        <Field label="Job Description / Responsibilities" error={errors.jobDescription?.message} className="md:col-span-2">
          <Textarea className="min-h-40" aria-invalid={!!errors.jobDescription} {...register("jobDescription")} />
        </Field>
        <Field label="Ideal Candidate Profile" error={errors.idealCandidate?.message} className="md:col-span-2">
          <Textarea placeholder="Personality, team fit, soft skills" {...register("idealCandidate")} />
        </Field>
        <Field label="Any Other Details" error={errors.additionalDetails?.message} className="md:col-span-2">
          <Textarea {...register("additionalDetails")} />
        </Field>
      </FormSection>

      <FormSection title="How Did You Find Us?">
        <Field label="How did you hear about us?" error={errors.source?.message} className="md:col-span-2">
          <SelectField control={control} name="source" placeholder="Select source" items={["LinkedIn", "Referral", "Google", "Other"]} />
        </Field>
      </FormSection>

      {serverError ? <p className="rounded-2xl border border-primary bg-white p-4 text-sm font-medium text-violet-700">{serverError}</p> : null}
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : null}
        {isSubmitting ? "Submitting..." : "Submit Hiring Request"}
      </Button>
    </form>
  );
}
