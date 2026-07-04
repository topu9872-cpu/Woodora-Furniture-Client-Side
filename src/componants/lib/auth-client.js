import { createAuthClient } from "better-auth/react";
import { jwtClient } from "better-auth/client/plugins";

const authBaseURL =
  import.meta.env.VITE_AUTH_BASE_URL ||
  import.meta.env.VITE_APP_URL ||
  import.meta.env.VITE_SERVER_PUBLIC_URL;

export const authClient = createAuthClient({
  baseURL: authBaseURL,

  plugins: [jwtClient()],

  fetchOptions: {
    credentials: "include",
  },
});

export const signIn = authClient.signIn;
export const signUp = authClient.signUp;
export const useSession = authClient.useSession;
