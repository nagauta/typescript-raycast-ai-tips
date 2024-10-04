"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
function getChromeUrl() {
    return new Promise((resolve, reject) => {
        const script = `
            tell application "Google Chrome"
                set currentTab to active tab of front window
                set currentURL to URL of currentTab
                return currentURL
            end tell
        `;
        (0, child_process_1.exec)(`osascript -e '${script}'`, (error, stdout, stderr) => {
            if (error) {
                reject(`Error: ${error.message}`);
                return;
            }
            if (stderr) {
                reject(`Stderr: ${stderr}`);
                return;
            }
            resolve(stdout.trim());
        });
    });
}
getChromeUrl()
    .then(url => console.log(`Current URL: ${url}`))
    .catch(error => console.error(error));
