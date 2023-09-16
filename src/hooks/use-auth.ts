import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { userType } from "../types/user";

interface AuthProps {
  loggedIn: boolean;
  token: string | null;
  user: userType | null;
  setAuth: (token: string) => void;
  setUser: (user: userType) => void;
  logout: () => void;
}

export const useAuth = create<AuthProps>()(
  persist(
    (set) => ({
      loggedIn: false,
      token: null,
      user: null,
      setAuth: (token: string) =>
        set((state) => {
          localStorage.setItem("access-token", token);
          return { loggedIn: true, token };
        }),
      logout: () =>
        set((state) => {
          return { loggedIn: false, token: "" };
        }),
      setUser: (user: userType) =>
        set((state) => {
          return { ...state, user };
        }),
    }),

    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
