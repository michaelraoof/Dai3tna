import { create } from "zustand";

const useBearStore = create((set) => ({
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
    set({ user, userFollowStats });
  },
}));
export default useBearStore;
