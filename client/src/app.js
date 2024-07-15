import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Authenticated from "./components/Authenticated";

import HomePage from "pages/home";
import LoginPage from "pages/login";
import Username from "pages/username";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Authenticated>
        <HomePage />
      </Authenticated>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/:username",
    element: (
      <Authenticated>
        <Username />
      </Authenticated>
    ),
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
