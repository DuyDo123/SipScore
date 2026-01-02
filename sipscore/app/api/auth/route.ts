import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Adapter } from "next-auth/adapters"
import { prisma } from "../lib/prisma";
import { z } from "zod";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials");
        }
        
        const credentialsSchema = z.object({
        email: z.string().email(),
        password: z.string().min(1),
        });

        const parsed = credentialsSchema.parse(credentials)

        const user = await prisma.user.findUnique({
          where: { email: parsed.email }
        });
        
        if (!user || !user.password) {
          throw new Error("User not found");
        }
        
        const isValid = await bcrypt.compare(
          parsed.password,
          user.password
        );
        
        if (!isValid) {
          throw new Error("Invalid password");
        }
        
        return {
          id: user.id,
          email: user.email,
          name: user.name,
        };
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };