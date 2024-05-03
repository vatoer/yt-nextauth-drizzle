interface AuthInputProps {
  id: string;
  type: string;
  label: string;
}

const AuthInput = ({ id, type, label }: AuthInputProps) => {
  return (
    <div className="relative group w-full">
      <input
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
    </div>
  );
};

export default AuthInput;
