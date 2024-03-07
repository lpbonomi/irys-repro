import { readFileSync } from "fs";
import Irys from "@irys/sdk";


export function getIrysInstance(){ 
    const walletPath = 'SOLANA_CUSTODIAL_SECRET_KEY_PATH';
    const key = JSON.parse(readFileSync(walletPath!).toString());

    return new Irys({
        key,
        url: 'BUNDLR_RPC_HOST', 
        token:'solana',
        config: {
            providerUrl: 'BUNDLR_SOLANA_RPC_HOST',
            timeout: 120000,
        }
    });
}