import { createAuthClient } from "better-auth/react";
import { jwtClient } from "better-auth/client/plugins";
export const authClient = createAuthClient({
  baseURL:import.meta.env.VITE_SERVER_PUBLIC_URL,

  fetchOptions: {
    credentials: "include",
  },


});

export const signIn = authClient.signIn;
export const signUp = authClient.signUp;
export const useSession = authClient.useSession;