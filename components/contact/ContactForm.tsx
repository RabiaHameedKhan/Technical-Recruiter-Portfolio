"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contactFormSchema";

export function ContactForm() {
  const [serverError, setServerError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", message: "", formType: "contact" }
  });

  async function onSubmit(values: ContactFormValues) {
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
    toast({ title: "Message sent", description: "Thanks, our team will reply as soon as we can." });
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="premium-card rounded-2xl p-6" noValidate>
      <div className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" aria-invalid={!!errors.name} {...register("name")} />
          {errors.name ? <p className="text-sm font-medium text-violet-700">{errors.name.message}</p> : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" aria-invalid={!!errors.email} {...register("email")} />
          {errors.email ? <p className="text-sm font-medium text-violet-700">{errors.email.message}</p> : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" aria-invalid={!!errors.message} {...register("message")} />
          {errors.message ? <p className="text-sm font-medium text-violet-700">{errors.message.message}</p> : null}
        </div>
        {serverError ? <p className="rounded-xl border border-primary bg-white p-3 text-sm font-medium text-violet-700">{serverError}</p> : null}
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : null}
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
}
