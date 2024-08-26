import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Authenticated from "components/Authenticated";

import HomePage from "pages/home";
import LoginPage from "pages/login";
import SignupPage from "pages/signup";
import Username from "pages/username";
import FollowersPage from "pages/user/followers";
import FollowingPage from "pages/user/following";
import ChatsPage from "pages/chats";
import NotificationsPage from "pages/notifications";
import PostByIdPage from "pages/postId";
import SettingsPage from "pages/settings";

function App() {
  return <RouterProvider router={router} />;
}
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
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/:username",
    element: (
      <Authenticated>
        <Username />
      </Authenticated>
    ),
  },
  {
    path: "/user/:userId/following",
    element: (
      <Authenticated>
        <FollowingPage />
      </Authenticated>
    ),
  },
  {
    path: "/user/:userId/followers",
    element: (
      <Authenticated>
        <FollowersPage />
      </Authenticated>
    ),
  },
  {
    path: "/chats",
    element: (
      <Authenticated>
        <ChatsPage />
      </Authenticated>
    ),
  },
  {
    path: "/notifications",
    element: (
      <Authenticated>
        <NotificationsPage />
      </Authenticated>
    ),
  },
  {
    path: "/post/:postId",
    element: (
      <Authenticated>
        <PostByIdPage />
      </Authenticated>
    ),
  },
  {
    path: "/settings",
    element: (
      <Authenticated>
        <SettingsPage />
      </Authenticated>
    ),
  },
]);
export default App;
