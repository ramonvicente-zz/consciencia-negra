/* globals gauge*/
"use strict";
const { openBrowser, closeBrowser, goto, highlight } = require('taiko');
const headless = process.env.headless_chrome.toLowerCase() === 'true';
 
beforeSuite(async () => {
    await openBrowser({ headless: headless })
});
 
afterSuite(async () => {
    await closeBrowser();
});
 
step ("Acessar o site consciência negra",
    (async () => {
        await goto("http://localhost:3000/consciencia-negra");
   })
);
 
step("Ver o texto <citacao>",
    (async (citacao) =>{
        await highlight(`${citacao}`);
    })
);