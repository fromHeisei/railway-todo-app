import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const OuthRouter = () => {
  const auth = useSelector((state) => state.auth.isSignIn);
  return auth ? <Outlet /> : <Navigate to="/signin" />;
};
