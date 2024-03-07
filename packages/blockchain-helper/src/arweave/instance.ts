import { readFileSync } from "fs";
import Irys from "@irys/sdk";
import { ENV } from "../../env.js";


export function getIrysInstance(){ 
    const walletPath = ENV.SOLANA_CUSTODIAL_SECRET_KEY_PATH;
    const key = JSON.parse(readFileSync(walletPath!).toString());

    return new Irys({
        key,
        url: ENV.BUNDLR_RPC_HOST, 
        token:'solana',
        config: {
            providerUrl: ENV.BUNDLR_SOLANA_RPC_HOST,
            timeout: 120000,
        }
    });
}