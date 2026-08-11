import { Browser } from "./Parent"

class Edge extends Browser
{
    launchBrowser()
    {
        console.log("Browser is Edge")
    }
}


const ed = new Edge()
ed.browsertype()
ed.launchBrowser()
ed.browserversion()


