import { Button } from "@/components/ui/button";
import Image from "next/image";
import AuthInput from "../../_components/auth-input";

const LoginForm = () => {
  return (
    <div className="w-[300px] rounded-lg border p-6 border-blue-700">
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
          <Button className=" w-full py-6" type="submit">
            LOGIN
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
