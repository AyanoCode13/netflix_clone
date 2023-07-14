import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../pages/home";
import { Suspense, lazy } from "react";
const ProtectedRoutes = lazy(() => import("./routes/ProtectedRoutes"));
const LoginPage = lazy(() => import("../pages/auth/login"));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={
          <Suspense>
            <ProtectedRoutes />
          </Suspense>
        }
      >
        <Route
          index
          element={<Home />}
          loader={async () => {
            const { getNextShows } = await import("../../api/showFunctions");
            return {
              dramas: await getNextShows("drama"),
              comedies: await getNextShows("comedy"),
              romance: await getNextShows("romance"),
              documentaries: await getNextShows("documentary"),
            };
          }}
        ></Route>
      </Route>
      <Route
        path="/login"
        element={<Suspense><LoginPage/></Suspense>}
        loader={async () => {
          const { googleOAuthURL } = await import("../../api/auth");
          const token =  await googleOAuthURL();
          console.log(token)
          return token
        }}
      />
    </Route>
  )
);
