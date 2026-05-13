import { z } from "zod";

export const hireFormSchema = z
  .object({
  fullName: z.string().min(2, "Please enter your full name."),
  employerTitle: z.string().min(2, "Please enter your job title."),
  companyName: z.string().min(2, "Please enter your company name."),
  companyWebsite: z.string().url("Please enter a valid URL.").optional().or(z.literal("")),
  workEmail: z.string().email("Please enter a valid work email."),
  phone: z.string().optional(),
  country: z.string().min(2, "Please enter your country or location."),
  jobTitle: z.string().min(2, "Please enter the position title."),
  numberOfPositions: z.coerce.number().min(1, "At least one position is required."),
  employmentType: z.string().min(1, "Please select an employment type."),
  workMode: z.string().min(1, "Please select a work mode."),
  officeLocation: z.string().optional(),
  experienceRequired: z.string().min(1, "Please select experience required."),
  seniorityLevel: z.string().min(1, "Please select seniority level."),
  techStack: z.string().min(10, "Please describe required skills."),
  salaryRange: z.string().optional(),
  hiringDeadline: z.string().min(1, "Please select a hiring deadline."),
  jobDescription: z.string().min(50, "Please add at least 50 characters."),
  idealCandidate: z.string().optional(),
  interviewProcess: z.string().optional(),
  additionalDetails: z.string().optional(),
  source: z.string().min(1, "Please select how you found me."),
    formType: z.literal("hire").default("hire")
  })
  .superRefine((data, ctx) => {
    if ((data.workMode === "Hybrid" || data.workMode === "On-site") && !data.officeLocation?.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["officeLocation"],
        message: "Please enter the office location for hybrid or on-site roles."
      });
    }
  });

export type HireFormValues = z.infer<typeof hireFormSchema>;
