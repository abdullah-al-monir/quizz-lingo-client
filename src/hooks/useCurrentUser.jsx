import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useCurrentUser = ({ email }) => {
  const axiosSecure = useAxiosSecure();
  const { data: user = [] } = useQuery({
    queryKey: ["user"],
    enabled: email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?email=${email}`);
      return res.data;
    },
  });
  return [user];
};

export default useCurrentUser;
