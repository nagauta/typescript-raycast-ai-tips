import { Detail } from "@raycast/api";
import { main } from "../chrome-url-fetcher/src/main";

export default function Command() {
  main();
  return <Detail markdown="# Hello World" />;
}
