import MaxWidth from "../../components/MaxWidth";
import useAllUsers from "../../hooks/useAllUsers";

const LeaderBoard = () => {
  const [users] = useAllUsers();
  console.log(users);
  return (
    <MaxWidth>
      <p>Okay</p>
    </MaxWidth>
  );
};

export default LeaderBoard;
