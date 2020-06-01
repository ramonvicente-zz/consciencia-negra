const { openBrowser, goto, text, closeBrowser } = require('taiko');
step ("ver texto", (async () => {
    try {
        await openBrowser();
        await goto("https://yurisilva.github.io/consciencia-negra");
        await highlight("Awesome project coming soon.");
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
}))();

