import * as z from "zod";

export const FormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});
