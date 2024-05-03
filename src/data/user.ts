export interface User {
  id?: string;
  name?: string | null;
  email?: string | null;
  password?: string | null;
  image?: string | null;
}

const getUserByEmail = async (email: string) => {
  const user: User = {
    id: "1",
    name: "Admin",
    email: "admin@example.io",
    password: "admin",
    image: "https://randomuser.me/api/portraits",
  };
  return user;
};

export { getUserByEmail };
