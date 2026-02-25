"use client";
import * as React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Field, FieldGroup } from "../ui/field";
import FormInput from "../form/form-input";
import FormTextarea from "../form/form-textarea";
import FormRadio from "../form/form-radio";
import FormCheckbox from "../form/form-checkbox";
import { ContactSchema } from "@/lib/validations/contact.schema";
import { toast } from "sonner";

const textFields = [
  { name: "firstName", label: "First Name" },
  { name: "lastName", label: "Last Name" },
  { name: "email", label: "Email Address" },
];

export function ContactForm() {
  const form = useForm({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      queryType: "",
      message: "",
      consent: false,
    },
  });
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = form;

  async function onSubmit(data) {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("Form Submitted! Thank you for contacting us.");
    reset();
  }
  return (
    <FormProvider {...form}>
      <form
        className="w-full sm:max-w-xl mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <FieldGroup>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {textFields.slice(0, 2).map((field) => {
                  return (
                    <FormInput
                      key={field.name}
                      name={field.name}
                      label={field.label}
                      className="h-10"
                    />
                  );
                })}
              </div>
              <FormInput
                name={"email"}
                label={"Email Address"}
                className="h-10"
              />
              <FormRadio
                name={"queryType"}
                label={"Query Type"}
                options={[
                  { value: "general", label: "General Enquiry" },
                  { value: "support", label: "Support Request" },
                ]}
              />
              <FormTextarea name={"message"} label={"Message"} rows={8} />
              <FormCheckbox
                name={"consent"}
                label={"I consent to being contacted by the team"}
              />
            </FieldGroup>
          </CardContent>
          <CardFooter>
            <Field orientation="horizontal">
              <Button
                variant="customPrimary"
                type="submit"
                className={"h-12 w-full"}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </Field>
          </CardFooter>
        </Card>
      </form>
    </FormProvider>
  );
}
