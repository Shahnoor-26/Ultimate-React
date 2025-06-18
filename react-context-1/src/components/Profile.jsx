import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <h2>Please Login!</h2>;
  return (
    <div>
      <h2>Dashboard {user.username}</h2>
      <span>Username: {user.username}</span>
      <br />
      <span>Password: {user.password}</span>
    </div>
  );
};

export default Profile;
