import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "http://localhost:5000", // your backend
});

// optional helpers (correct way)
export const signIn = authClient.signIn;
export const signUp = authClient.signUp;
export const useSession = authClient.useSession;