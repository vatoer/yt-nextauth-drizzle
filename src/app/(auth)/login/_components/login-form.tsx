import AuthInput from "@/app/auth/_components/auth-input";
import LoginWithGoogle from "@/app/auth/_components/login-with-google";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const LoginForm = () => {
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
        <form className="flex flex-col gap-4 w-full">
          <AuthInput label="Email" type="email" id="email" />
          <AuthInput label="Password" type="password" id="password" />
          <Button className="w-full py-6" type="submit">
            LOGIN
          </Button>
          <div className="flex items-center before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
            <p className="text-center font-semibold mx-4 mb-0 text-gray-500">
              OR
            </p>
          </div>
          <LoginWithGoogle />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
