import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const guardAuth = (Auth) => {
  const Wrapper = () => {
    const { token, userData, loggedIn } = useSelector(
      (state) => state.authSlice
    );

    return !token && !loggedIn && !userData ? <Auth /> : <Navigate to="/" />;
  };
  return Wrapper;
};

export default guardAuth;
