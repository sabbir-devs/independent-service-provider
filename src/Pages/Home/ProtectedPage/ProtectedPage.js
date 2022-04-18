import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../../../Firebase/firebase.init";
import { useAuthState } from 'react-firebase-hooks/auth';
import Spiner from "../Spiner/Spiner";

const ProtectedPage = ({ children }) => {
  const [user, loading, ] = useAuthState(auth);
  const location = useLocation();
  // const user = auth.currentUser;
  if(loading){
    return <Spiner></Spiner>
  }
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
};

export default ProtectedPage;
