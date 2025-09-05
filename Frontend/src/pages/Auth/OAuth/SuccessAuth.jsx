import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIsUserLoggedInTrue } from "../../../features/slices/auth";
import { Navigate } from "react-router-dom";

const SuccessAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsUserLoggedInTrue());
  }, []);

  return <Navigate to="/" replace />;
};

export default SuccessAuth;
