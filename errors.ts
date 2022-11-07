

type BankAccessErrorMessage = "There was an error accessing this account's transaction data." 

type BadRequestErrorMessage = "Invalid username and password combo." 

export type InternalServerErrorMessage = "Internal server error encountered."

export class BankAccessError extends Error{
    constructor(msg: BankAccessErrorMessage) {
        super(msg);
    }
}

export class BadRequestError extends Error{
    constructor(msg: BadRequestErrorMessage) {
        super(msg);
    }
}