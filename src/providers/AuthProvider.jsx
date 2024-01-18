import { createContext, useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
export const UserAuth = createContext(null);
const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState(null);
  console.log(email);
  const [user, setUser] = useState(null);
  const axiosSecure = useAxiosSecure();
  console.log(user);
  useEffect(() => {
    axiosSecure
      .get(`/users?email=${email}`)
      .then((res) => setUser(res.data))
      .catch((error) => console.log(error));
  }, [axiosSecure, email]);
  const authInfo = { email, setEmail, user,setUser };
  return <UserAuth.Provider value={authInfo}>{children}</UserAuth.Provider>;
};

export default AuthProvider;
