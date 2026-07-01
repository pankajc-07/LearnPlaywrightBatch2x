enum Browser {
    Chrome = "chrome",
    Firefox = "firefox",
    Safari = "safari",
    Edge = "edge"
}

function launchBrowser(browser: Browser): void {
    switch (browser) {
        case Browser.Chrome:
            console.log("Launching Chromium (Chrome v120)");
            break;
        case Browser.Firefox:
            console.log("Launching Gecko (Firefox v115)");
            break;
        case Browser.Safari:
            console.log("Launching WebKit (Safari v17)");
            break;
        case Browser.Edge:
            console.log("Launching Chromium (Edge v120)");
            break;
    }
}

launchBrowser(Browser.Chrome);
console.log("*******************************************");

enum Server {
    Branch1 = "Branch1 server",
    Branch2 = "Branch2 server",
    Master = "Master server",
    Staging = "Staging server",
}

function startServer(server: Server): void {
    switch (server) {
        case Server.Branch1:
            console.log("Testting on Branch1 server");
            break;
        case Server.Branch2:
            console.log("Testing on Branch2 server");
            break;
        case Server.Master:
            console.log("Testing on Master server");
            break;
        case Server.Staging:
            console.log("Testing on Staging server");
            break
    }
}

startServer(Server.Master);
startServer(Server.Staging);