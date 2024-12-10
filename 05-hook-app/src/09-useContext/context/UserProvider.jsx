import { UserContext } from "./UserContext";

const user = {
  id: 123,
  name: "Christian Rafael",
  email: "christian@google.com",
};

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hola: "Mundo", user: user }}>
      {children}
    </UserContext.Provider>
  );
};
