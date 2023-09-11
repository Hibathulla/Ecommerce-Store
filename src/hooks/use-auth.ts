import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface AuthProps {
  loggedIn: boolean;
  token: string;
  setAuth: (token: string) => void;
  logout: () => void;
}

export const useAuth = create<AuthProps>()(
  persist(
    (set) => ({
      loggedIn: false,
      token: "",
      setAuth: (token: string) => set((state) => ({ loggedIn: true, token })),
      logout: () => set((state) => ({ loggedIn: false, token: "" })),
    }),

    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
