import {
    Transaction
} from '../types'
import * as puppeteer from 'puppeteer'
/**Loads chase transactions from a specified date onward */
export async function loadChaseTransactions(
    accountId : number, 
    sinceYear : number,
    sinceMonth : number, 
    sinceDay : number
) : Promise<void>{
    const browser = await puppeteer.launch({headless : "chrome"});
    const page = await browser.newPage();
    await page.goto('https://google.com');
    await page.pdf({path: 'google.pdf'});

    await browser.close();
}


/**Loads chase transactions from a specified date onward */
export async function getChaseTransactions(
    accountId : number, 
    sinceYear : number,
    sinceMonth : number, 
    sinceDay : number
) : Promise<Transaction[]>{
    return []
}
const accountId = 1
const sinceYear = 2022
const sinceMonth = 6
const sinceDay = 7
loadChaseTransactions(
    accountId,
    sinceYear,
    sinceMonth,
    sinceDay
)