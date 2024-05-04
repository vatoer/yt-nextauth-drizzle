"use server";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { LoginSchema, TLogin } from "../_zodschema/login";

export const login = async (data: TLogin) => {
  console.log("login");
  // Validate the data again on server side
  const validateSchema = LoginSchema.safeParse(data);

  if (!validateSchema.success) {
    return {
      type: "LOGIN_ERROR",
      error: validateSchema.error.errors,
    };
  }

  const { email, password } = validateSchema.data;

  // Login logic here
  try {
    await signIn("credentials", { email, password, redirectTo: "/protected" });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin": {
          console.log(error);
          return { error: "Invalid credentials" };
        }
        default:
          return { error: "Something went wrong" };
      }
    }
    throw error;
  }

  return {
    type: "LOGIN",
  };
};
