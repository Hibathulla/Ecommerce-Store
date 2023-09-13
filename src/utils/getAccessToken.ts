import { useAuth } from "../hooks/use-auth";

export function useCurrentAccessToken() {
  // this is how you access the zustand store outside of React.
  const { token } = useAuth();
  return token;
}
