import { useEffect, useState } from "react";
import useBearStore from "store/store";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import baseUrl from "../utils/baseUrl";
import axios from "axios";
export default function useAuth() {
  const [loading, setLoading] = useState(true);
  const { setIsAuthenticated, initializeUser } = useBearStore((state) => ({
    initializeUser: state.initializeUser,
    setIsAuthenticated: state.setIsAuthenticated,
  }));

  const initializeAuth = async () => {
    setLoading(true);
    const { token } = Cookies.get();

    if (!token) {
      setIsAuthenticated(false);
      setLoading(false);
      //this means if there are protected routes in pathname, then move user to /login page since no token
    } else {
      try {
        const res = await axios.get(`${baseUrl}/api/auth`, {
          headers: { Authorization: token },
        }); //this receives an object with user and userFollowStats
        const { user, userFollowStats } = res.data;

        initializeUser({ user, userFollowStats });
        setIsAuthenticated(true);
        setLoading(false);
      } catch (error) {
        Cookies.remove("token"); //destroy the cookie in case of error

        setLoading(false);
        setIsAuthenticated(false);
      }
    }
  };
  useEffect(() => {
    initializeAuth();
  }, []);
  return { loading };
}
