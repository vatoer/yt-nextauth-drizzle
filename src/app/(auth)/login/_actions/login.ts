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

  return {
    type: "LOGIN",
  };
};
