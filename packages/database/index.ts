import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(process.cwd(), `../../packages/database/.env`),
});

export * from "@prisma/client";

export * from "./models/files.js";

export * from "./prismaClientSingleton.js";