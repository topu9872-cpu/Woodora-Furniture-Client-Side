import { createAuthClient } from "better-auth/react";
import { jwtClient } from "better-auth/client/plugins";

const authBaseURL =
  import.meta.env.VITE_SERVER_PUBLIC_URL || "http://localhost:5000";

export const authClient = createAuthClient({
  baseURL: authBaseURL,
  plugins: [jwtClient()],
  fetchOptions: {
    credentials: "include",
  },
});

export const signIn = authClient.signIn;
export const signUp = authClient.signUp;
export const signOut = authClient.signOut;
export const useSession = authClient.useSession;