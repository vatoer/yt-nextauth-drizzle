"use client";
import AuthInput from "@/app/auth/_components/auth-input";
import LoginWithGoogle from "@/app/auth/_components/login-with-google";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { login } from "../_actions/login";
import { LoginSchema, TLogin } from "../_zodschema/login";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLogin>({
    resolver: zodResolver(LoginSchema),
  });

  const [isPending, startTransition] = useTransition();

  const onSubmit = (data: TLogin) => {
    console.log(data);
    startTransition(async () => {
      // login logic here
      const l = await login(data);
      console.log(l);
    });
  };

  return (
    <div className="w-[300px] rounded-lg border p-6 border-gray-300 shadow-lg">
      <div className="flex flex-col items-center gap-2 w-full">
        <Image
          src="/logo.png"
          width={100}
          height={100}
          alt="logo"
          className="mx-auto rounded-full md:block m-4"
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full"
        >
          <AuthInput
            register={register}
            label="Email"
            type="email"
            id="email"
            error={errors.email}
          />
          <AuthInput
            register={register}
            label="Password"
            type="password"
            id="password"
            error={errors.password}
          />
          <Button className="w-full py-6" type="submit">
            LOGIN
          </Button>
          <div className="flex items-center before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
            <p className="text-center font-semibold mx-4 mb-0 text-gray-500">
              OR
            </p>
          </div>
          <LoginWithGoogle callbackUrl="/protected" />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
