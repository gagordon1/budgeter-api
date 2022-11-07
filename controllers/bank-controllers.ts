import {
    Transaction
} from '../types'
/**Loads chase transactions from a specified date onward */
export async function loadChaseTransactions(
    accountId : number, 
    sinceYear : number,
    sinceMonth : number, 
    sinceDay : number
) : Promise<void>{

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