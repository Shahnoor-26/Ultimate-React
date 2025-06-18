import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, updateUsername] = useState("");
  const [password, updatePassword] = useState("");

  const { updateUser } = useContext(UserContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        updateUser({ username, password });
      }}
    >
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Type username"
        value={username}
        onChange={(e) => {
          updateUsername(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="Type password"
        value={password}
        onChange={(e) => {
          updatePassword(e.target.value);
        }}
      />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
