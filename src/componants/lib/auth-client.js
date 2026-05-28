import { createAuthClient } from "better-auth/react";
import { jwtClient } from "better-auth/client/plugins";
export const authClient = createAuthClient({
  baseURL: "http://localhost:5000/api/auth",

  fetchOptions: {
    credentials: "include",
  },

  plugins:[
    jwtClient()
  ]
});

export const signIn = authClient.signIn;
export const signUp = authClient.signUp;
export const useSession = authClient.useSession;