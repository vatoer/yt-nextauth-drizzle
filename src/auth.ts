import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { getUserByEmail } from "./data/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
    Credentials({
      async authorize(credentials) {
        const user = await getUserByEmail(credentials.email as string);
        if (user && user.password === credentials.password) {
          return user;
        } else {
          return null;
        }
        return null;
      },
    }),
  ],
});
