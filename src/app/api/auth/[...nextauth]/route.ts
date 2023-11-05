import NextAuth from "next-auth";

import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"

export const authOptions: AuthOptions = {
  providers: [
    //   GoogleProvider({
    //         clientId: process.env.NEXT_AUTH_GOOGLE_CLIENT_ID,
    //         clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET,
    //     }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        if (!credentials) {
          return null;
        }
        const username = credentials.username;
        const password = credentials.password;

        if (username == "admin" && password == "admin") {
          return {
            id: "adminId",
            email: "adminEmail",
          };
        } else {
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXT_AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
