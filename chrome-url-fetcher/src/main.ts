import { fethInformationFromUrl, getChromeUrl, summarizer } from "./lib";
import * as dotenv from 'dotenv';
dotenv.config();

export async function main(){
    const url: string  = await getChromeUrl();
    const info: string = await fethInformationFromUrl(url);
    const ai = await summarizer(process.env['OPENAI_API_KEY'] ?? '');
    const summary = await ai(info);
    console.log(`summary: ${summary}`);
}
