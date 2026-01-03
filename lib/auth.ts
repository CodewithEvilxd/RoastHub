import type { Database } from "@/lib/database.types";
import { createClient } from "@supabase/supabase-js";
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const NAMESPACE = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // Derive a stable provider user id for NextAuth without an adapter
      const providerUserId =
        (account as any)?.providerAccountId || (profile as any)?.sub || user.id;

      if (account?.provider === "google" && providerUserId) {
        const { data: userId } = await (supabase as any).rpc('generate_uuid_v5', {
          namespace: NAMESPACE,
          name: providerUserId
        });
        try {
          const { data: existingProfile } = await supabase
            .from("profiles")
            .select("id")
            .eq("id", userId)
            .single();

          if (!existingProfile) {
            await (supabase as any).from("profiles").insert({
              id: userId,
              email: user.email || "",
              name: user.name || null,
              avatar_url: user.image || null,
            });
          }
        } catch (error) {
          console.error("Error creating profile:", error);
          // Don't block sign-in if profile creation fails
        }
      }
      return true;
    },
    async session({ session, token }) {
      if (session.user && token.sub) {
        const { data: userId } = await (supabase as any).rpc('generate_uuid_v5', {
          namespace: NAMESPACE,
          name: token.sub
        });
        session.user.id = userId;
      }
      return session;
    },
    async jwt({ token, user, account, profile }) {
      if (user) {
        const providerUserId =
          (account as any)?.providerAccountId ||
          (profile as any)?.sub ||
          user.id ||
          token.sub;
        token.sub = providerUserId;
      }
      return token;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
  session: {
    strategy: "jwt",
  },
};
