import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Protected = ({ children, authentication = true }) => {
  const [loader, updateLoader] = useState(true);
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (authentication && isAuthenticated !== authentication) {
      navigate("/login");
    } else if (!authentication && isAuthenticated !== authentication) {
      navigate("/");
    }
    updateLoader(false);
  }, [authentication, isAuthenticated, navigate]);

  return loader ? <h1>Loading</h1> : <>{children}</>;
};

export default Protected;
