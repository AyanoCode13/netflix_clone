import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";
const AuthLayout = lazy(() => import("../../templates/layouts/authLayout"))

export default function ProtectedRoutes() {
  const auth = Cookies.get("auth");
  console.log(auth)
  return (auth ?
    <Suspense>
        <AuthLayout>
            <Outlet />
        </AuthLayout>
    </Suspense>
  : <Navigate to="/login" />);
}