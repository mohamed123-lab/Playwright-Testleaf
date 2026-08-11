import { Browser } from "./Parent"

class Chrome extends Browser
{
    launchBrowser()
    {
        console.log("Browser is Chrome")
    }
}

const cr = new Chrome()
cr.browsertype()
cr.launchBrowser()
cr.browserversion()

