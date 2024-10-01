// src/getChromeUrl.ts
import { exec } from 'child_process';

function getChromeUrl(): Promise<string> {
    return new Promise((resolve, reject) => {
        const script = `
            tell application "Google Chrome"
                set currentTab to active tab of front window
                set currentURL to URL of currentTab
                return currentURL
            end tell
        `;
        
        exec(`osascript -e '${script}'`, (error, stdout, stderr) => {
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
