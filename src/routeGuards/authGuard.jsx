import { useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const AuthGuard = ({ children, requireAuth, module, module_access, requireSelectedAirport }) => {
  const navigate = useNavigate();
  const isLoggedIn = Cookies.get("bsmart_jwtToken");
  // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  // const currentAirport = useSelector(state => state.settings.currentAirport);
  // const user = useSelector(state => state.auth.user);
  const resetRoutes = ["/set-password", "/reset-password"];
  const inResetRoute = resetRoutes.includes(window.location.pathname);
  useEffect(() => {
    if (requireAuth && !isLoggedIn) {
      navigate("/Signin");
    }
    if (!requireAuth && isLoggedIn && !inResetRoute) {
      setTimeout(() => navigate("/"), 0);
    }
  }, [isLoggedIn]);
  if (requireAuth && !isLoggedIn) {
    return <Navigate to="/Signin" replace />;
  }
  // if( user && user.type === "USER" && (module==='GIS' || module==='SETTINGS' || module==='REPORTS') ){
  //   return <ComingSoon title="You don't have access to this module, because you are an user." />
  // }
  // if (
  //   user &&
  //   (user.type === "AUTHORITY_ADMIN" || user.type === "SUPER_ADMIN") &&
  //   (module === "GIS" || module === "SETTINGS" || module === "REPORTS")
  // ) {
  //   module_access = true;
  // }

  // if (!module_access) {
  //   return <ComingSoon title="You don't have access to this module." />;
  // }
  // if (requireSelectedAirport && !currentAirport) {
  //   return <ComingSoon title="Select an airport to proceed" />;
  // }

  return children;
};

export default AuthGuard;
