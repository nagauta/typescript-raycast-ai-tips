import { fethInformationFromUrl, getChromeUrl, summarizer } from "./lib";

export async function main(){
    const url: string  = await getChromeUrl();
    const info: string = await fethInformationFromUrl(url);
    const ai = await summarizer();
    const summary = await ai(info);
    console.log(`summary: ${summary}`);
}
