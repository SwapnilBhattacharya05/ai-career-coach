import { PrismaClient } from "@prisma/client";

export const db = globalThis.prisma || new PrismaClient();

// TO PREVENT CREATING NEW PrismaClient EVERY TIME USER RELOADS THE PAGE
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
