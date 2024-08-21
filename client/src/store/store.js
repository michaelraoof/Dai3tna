import { create } from "zustand";
import zukeeper from "zukeeper";
const useBearStore = create(
  zukeeper((set) => ({
    isAuthenticated: false,
    user: {},
    userFollowStats: {},
    setIsAuthenticated: (isAuthenticated) => {
      set({ isAuthenticated });
    },
    setUser: (user) => {
      set({ user });
    },
    setUserFollowStats: (userFollowStats) => {
      set({ userFollowStats });
    },
    initializeUser: ({ user, userFollowStats }) => {
      set({ user, userFollowStats, isAuthenticated: true });
    },
    signUpDetails: {},
    setSignUpDetails: (signUpDetails) => {
      set({ signUpDetails });
    },
  }))
);
window.store = useBearStore;
export default useBearStore;
