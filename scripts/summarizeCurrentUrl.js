#!/Users/myano/.local/share/mise/installs/node/20/bin/node
// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Summarize Current URL
// @raycast.mode fullOutput
// @raycast.icon 🤩
// Optional parameters:
// @raycast.packageName summarize-current-url
const main = require("./chrome-url-fetcher/dist/main.js")
main.main();