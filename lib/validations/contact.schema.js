import z from "zod";

export const ContactSchema = z.object({
  firstName: z.string().min(2, "Minimum 2 characters required").max(32),

  lastName: z.string().min(2, "Minimum 2 characters required").max(32),
  email: z.string().email("Please enter a valid email address."),

  queryType: z.enum(["general Enquiry", "support Request"], {
    required_error: "Please select a query type.",
  }),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters.")
    .max(100, "Message must be at most 100 characters."),
  consent: z.boolean().refine((value) => value === true, {
    message: "You must consent to proceed.",
  }),
});
