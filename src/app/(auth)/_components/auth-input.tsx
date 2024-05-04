import { FieldError, UseFormRegister } from "react-hook-form";

interface AuthInputProps {
  id: string;
  type: string;
  label: string;
  register: UseFormRegister<any>;
  error?: FieldError | undefined;
}

const AuthInput = ({ id, type, label, register, error }: AuthInputProps) => {
  return (
    <div className="relative group w-full">
      <input
        {...register(id)}
        id={id}
        type={type}
        required
        className="form-control block w-full h-[4em] px-4 py-5 text-sm font-normal text-gray-700 bg-white border border-gray-300 rounded-sm m-0
        focus:border-blue-500 focus:text-gray-700 focus:outline-none peer"
      />
      <label
        htmlFor={id}
        className="transform transition-all absolute top-4 ml-4 peer-valid:px-2 group-focus-within:px-2 group-focus-within:text-sm group-focus-within:top-1 group-focus-within:text-blue-500
        peer-valid:top-1 peer-valid:text-sm
      "
      >
        {label}
      </label>
      {error && (
        <span className="text-red-500 w-[250px] overflow-auto whitespace-normal flex-shrink-0 break-words block">
          {error.message}
        </span>
      )}
    </div>
  );
};

export default AuthInput;
