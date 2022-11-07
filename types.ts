type BankId = 0 | 1

export interface LoadTransactionsRequest{
    /**account id for the bank account */
    accountId : number,
    /**budgeter internal id for the bank */
    bankId : BankId,
    /**YYYY year to start pulling transactions */
    sinceYear : number,
    /**month to start pulling transactions (1-12)*/
    sinceMonth : number,
    /**day to start pulling transactions, must be valid for month and year */
    sinceDay : number
}