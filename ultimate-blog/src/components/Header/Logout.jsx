import { useDispatch } from "react-redux";
import { auth } from "../../appwrite/auth";
import { logout as logoutStore } from "../../store/authSlice";

const Logout = () => {
  const dispatch = useDispatch();

  const handlerLogout = () => {
    auth
      .logout()
      .then(() => dispatch(logoutStore()))
      .catch((error) => console.log("logout service error:", error));
  };

  return (
    <button
      type="button"
      className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={handlerLogout}
    >
      Logout
    </button>
  );
};

export default Logout;
