import { Detail, getPreferenceValues } from "@raycast/api";
import { getChromeUrl, fethInformationFromUrl, summarizer } from "../chrome-url-fetcher/src/lib";
import { useEffect, useState } from "react";
export interface Preferences {
  OPENAI_API_KEY: string;
}
export default function Command() {
  const [summary, setSummary] = useState<string | null>(null);
  const { OPENAI_API_KEY }: Preferences = getPreferenceValues();
  const summarize = async () => {
    const url: string = await getChromeUrl();
    const info: string = await fethInformationFromUrl(url);
    const ai = await summarizer(OPENAI_API_KEY);
    setSummary(await ai(info));
  };

  useEffect(() => {
    summarize();
  }, []);

  return <Detail markdown={`${summary ?? "now loading..."}`} />;
}
