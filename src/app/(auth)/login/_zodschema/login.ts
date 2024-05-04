import { z } from "zod";

export const LoginSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8, "Password must be at least 8 characters"),
  })
  .superRefine(({ password }, checkPassComplexity) => {
    const { valid, message } = validatePassword(password);
    if (!valid) {
      checkPassComplexity.addIssue({
        code: "custom",
        path: ["password"],
        message: `Password must contain at least one ${message}`,
      });
    }
  });

export type TLogin = z.infer<typeof LoginSchema>;

function validatePassword(password: string): {
  valid: boolean;
  message?: string;
} {
  const containsUppercase = (ch: string) => /[A-Z]/.test(ch);
  const containsLowercase = (ch: string) => /[a-z]/.test(ch);
  const containsNumber = (ch: string) => /[0-9]/.test(ch);
  const containsSpecial = (ch: string) =>
    /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/.test(ch);
  const counts = {
    uppercase: 0,
    lowercase: 0,
    number: 0,
    special: 0,
  };

  const errorMessages = [];

  for (const ch of password) {
    switch (true) {
      case containsUppercase(ch):
        counts.uppercase++;
        break;
      case containsLowercase(ch):
        counts.lowercase++;
        break;
      case containsNumber(ch):
        counts.number++;
        break;
      case containsSpecial(ch):
        counts.special++;
        break;
    }
  }

  if (counts.uppercase < 1) errorMessages.push("uppercase letter");
  if (counts.lowercase < 1) errorMessages.push("lowercase letter");
  if (counts.number < 1) errorMessages.push("number");
  if (counts.special < 1) errorMessages.push("special character");

  return {
    valid: errorMessages.length === 0,
    message: errorMessages.join(", "),
  };
}
