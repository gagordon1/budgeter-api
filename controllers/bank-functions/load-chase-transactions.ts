
import * as dotenv from "dotenv";
dotenv.config();
import * as puppeteer from 'puppeteer-core'
import * as fs from 'fs'
import { ElementHandle } from "puppeteer";
var chaseCookies = JSON.parse(fs.readFileSync('./cookies/chase.json', 'utf-8'))

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

const IFRAME_SELECTOR="#logonbox"
const USERNAME_INPUT_SELECTOR="#userId-text-input-field"
const PASSWORD_INPUT_SELECTOR="#password-text-input-field"
/**Loads chase transactions from a specified date onward */
export async function loadChaseTransactions(
    accountId : number, 
    username : string,
    password : string,
    sinceYear : number,
    sinceMonth : number, 
    sinceDay : number
) : Promise<void>{
    const browser = await puppeteer.launch({
        executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
        headless : false
    })
    const page = await browser.newPage();
    await page.setCookie(...chaseCookies)
    await page.goto('https://secure25ea.chase.com/web/auth/dashboard#/dashboard/overviewAccounts/overview/index');
    await delay(1000)
    // const frame = await page.$(IFRAME_SELECTOR) as unknown as ElementHandle<HTMLIFrameElement>
    // const usernameButton = await frame.$(USERNAME_INPUT_SELECTOR) as unknown as ElementHandle<HTMLInputElement>
    // await usernameButton.type(username, {delay:100})
    await page.pdf({path: 'screenshots/chase.pdf'});

    // await browser.close();
}


