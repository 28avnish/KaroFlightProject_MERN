import { Navigate } from "react-router-dom";
import { toast } from "sonner";

const FailedAuth = () => {
  toast.error("Try again some error occured ! ");

  return <Navigate to="/login" replace />;
};

export default FailedAuth;
