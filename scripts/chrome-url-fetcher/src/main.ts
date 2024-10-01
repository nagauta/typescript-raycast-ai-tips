import { fethInformationFromUrl, getChromeUrl } from "./lib";

async function main(){
    const url: string  = await getChromeUrl();
    console.log(`Current XXX: ${url}`);
    const info: string = await fethInformationFromUrl(url);
    console.log(`Current XXX: ${info}`);
}

main();