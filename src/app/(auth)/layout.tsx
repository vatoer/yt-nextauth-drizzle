const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center justify-center w-full">{children}</div>
    </div>
  );
};

export default AuthLayout;
