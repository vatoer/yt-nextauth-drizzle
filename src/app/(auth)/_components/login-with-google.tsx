import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";

const LoginWithGoogle = () => {
  return (
    <Button
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
