import { getChromeUrl } from "./lib";

async function main(){
    const url: string  = await getChromeUrl();
    console.log(`Current XXX: ${url}`);
}

main();