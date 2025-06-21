import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "./appwrite/auth.js";
import { login, logout } from "./store/authSlice.js";
import { Header, Footer } from "./components/index.js";

const Layout = () => {
  const [loading, updateLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    auth
      .currentUser()
      .then((userdata) =>
        userdata ? dispatch(login({ userdata })) : dispatch(logout())
      )
      .catch((error) => console.log("loading time error: ", error))
      .finally(() => updateLoading(false));
  }, []);

  return loading ? (
    <>
      <Header />
      {/* <Outlet*/}
      <div className="h-auto w-auto m-4 p-4">
        <h1 className="text-2xl text-center font-semibold ">
          Screen is loading
        </h1>
      </div>
      <Footer />
    </>
  ) : (
    <>
      <Header />
      {/* <Outlet*/}
      <div className="h-auto w-auto m-4 p-4">
        <h1 className="text-2xl text-center font-semibold ">
          Screen is Loaded
        </h1>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
