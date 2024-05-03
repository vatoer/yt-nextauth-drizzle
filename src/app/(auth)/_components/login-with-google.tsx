"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

interface LoginWithGoogleProps {
  callbackUrl?: string;
}

const LoginWithGoogle = ({ callbackUrl }: LoginWithGoogleProps) => {
  const handleLoginWithGoogle = () => {
    console.log("Login with Google");
    signIn("google", { callbackUrl });
  };
  return (
    <Button
      onClick={handleLoginWithGoogle}
      type="button"
      variant={"outline"}
      className="flex justify-center items-center gap-x-2 py-6"
    >
      <FcGoogle className="h-7 w-7" />
      <span className="text-slate-600">Login dengan Google</span>
    </Button>
  );
};

export default LoginWithGoogle;
