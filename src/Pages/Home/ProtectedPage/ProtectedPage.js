import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../../../Firebase/firebase.init";

const ProtectedPage = ({ children }) => {
  console.log(children);
  const location = useLocation();
  const user = auth.currentUser;
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
};

export default ProtectedPage;
