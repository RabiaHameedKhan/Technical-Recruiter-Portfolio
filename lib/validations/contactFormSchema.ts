import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  message: z.string().min(10, "Please add a message."),
  formType: z.literal("contact").default("contact")
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
