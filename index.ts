import * as express from "express";
import * as cors from "cors";
import { LoadTransactionsRequest } from "./types";
import { 
  loadChaseTransactions 
} from './controllers/bank-controllers'
import { BadRequestError, BankAccessError } from "./errors";
const config = require("./config.json")
const app = express()
app.use(cors({
    origin: config.DEVELOPMENT? "http://localhost:3000" : ""
}));
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.put('/transactions,', async (req, res) =>{
  const data : LoadTransactionsRequest = req.body
  try {
    await loadChaseTransactions(
      data.accountId,
      data.sinceYear,
      data.sinceMonth,
      data.sinceDay
    )
    res.send(`Successfully loaded transactions for \nbankId: ${data.bankId}\naccountId: ${data.accountId}`)
  } catch (e) {
    console.log(e)
    if (e instanceof BadRequestError){
      res.status(400).send(e.message)
    }else if (e instanceof BankAccessError){
      res.status(500).send(e.message)
    }else{
      res.status(500).send("Internal server error encountered.")
    }
  }
  
})


app.listen(port, () => {
  console.log(`Budgeter App listening on port ${port}`)
})