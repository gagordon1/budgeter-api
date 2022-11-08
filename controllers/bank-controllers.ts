import { Transaction, BankId } from "../types"
import { BANKS } from '../global'
import { loadChaseTransactions } from "./bank-functions/load-chase-transactions"
import * as dotenv from "dotenv";
dotenv.config();

export async function loadBankTransactions(
    bankId : BankId,
    accountId : number, 
    username : string,
    password : string,
    sinceYear : number,
    sinceMonth : number, 
    sinceDay : number
) : Promise<void>{
    switch(bankId){
        case BANKS.CHASE_BANK:
            loadChaseTransactions(
                accountId,
                username,
                password,
                sinceYear,
                sinceMonth,
                sinceDay
            )
    }
}

/**Loads chase transactions from a specified date onward */
export async function getBankTransactions(
    bankId : BankId,
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
const username = process.env.CHASE_USERNAME
const password = process.env.CHASE_PASSWORD
loadBankTransactions(
    0,
    accountId,
    username,
    password,
    sinceYear,
    sinceMonth,
    sinceDay
)
