import { Navigate } from "react-router-dom";
import AuthService from "services/auth.service";

const AuthGuard: React.FC = ({ children }) => {
  if (AuthService.isLoggedIn) return <>{children}</>;

  return <Navigate replace to="/auth/login" />;
};

export default AuthGuard;
