import axios from "axios";
import baseUrl from "./baseUrl";
import catchErrors from "./catchErrors";

import cookie from "js-cookie";

export const registerUser = async (
  user,
  profilePicUrl,
  setError,
  setLoading
) => {
  try {
    const res = await axios.post(`${baseUrl}/api/signup`, {
      user,
      profilePicUrl,
    }); //user is the user object from frontend

    setToken(res.data); //jwt token received in res.data from backend
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
  setLoading(false);
};

export const loginUser = async (user, router, setErrorMessage, setLoading) => {
  setLoading(true);

  try {
    const res = await axios.post(`${baseUrl}/api/auth`, { user }); //user is the user object from frontend

    setToken(res.data); //jwt token received in res.data from backend
    router("/");
  } catch (error) {
    const errorMsg = catchErrors(error);
    setErrorMessage(errorMsg);
  }

  setLoading(false);
};

export const redirectUser = (location) => {
  // redirect(location);
  // window.location.href = location;
};

const setToken = (token) => {
  cookie.set("token", token); //save the jwt token in the cookie
  // redirectUser("/");
};

export const logoutUser = async (email, router) => {
  if (router.pathname === "/chats") {
    router.replace("/");
  }
  cookie.set("userEmail", email); //this cookie is set to auto set the email field next time the user is on /login page
  cookie.remove("token");

  await router.push("/login");
  router.reload();
};
