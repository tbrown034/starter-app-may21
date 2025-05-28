import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import NeonAdapter from "@auth/neon-adapter";
import { Pool } from "@neondatabase/serverless";

const isProd = process.env.VERCEL_ENV === "production";

export const { handlers, signIn, signOut, auth } = NextAuth(() => {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });

  return {
    adapter: NeonAdapter(pool),
    providers: [
      GoogleProvider({
        clientId: isProd
          ? process.env.AUTH_GOOGLE_ID
          : process.env.AUTH_GOOGLE_ID_DEV,
        clientSecret: isProd
          ? process.env.AUTH_GOOGLE_SECRET
          : process.env.AUTH_GOOGLE_SECRET_DEV,
      }),
    ],
    secret: process.env.AUTH_SECRET,
  };
});
