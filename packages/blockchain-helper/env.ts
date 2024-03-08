import z from "zod";
import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(process.cwd(), `../../packages/blockchain-helper/.env`),
});

const envSchema = z.object({
  SOLANA_CUSTODIAL_SECRET_KEY_PATH: z.string().min(1).readonly(),
  BUNDLR_SOLANA_RPC_HOST: z.string().min(1).readonly(),
  BUNDLR_RPC_HOST: z.string().min(1).readonly(),
});

export const ENV = envSchema.parse(process.env);
