"use client";

import { ContactForm } from "@/components/contact/contact-form";
import ToastProvider from "@/components/ToastProvider";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background p-4">
      <ContactForm />
      <ToastProvider />
    </main>
  );
}
