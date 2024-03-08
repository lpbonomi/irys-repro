import { uploadMediaToArweave } from "blockchain-helper";

export async function getArweaveUrl(){
    await uploadMediaToArweave();
}
