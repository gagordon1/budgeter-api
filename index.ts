import * as express from "express";
const plaidController = require( "./controllers/plaid-controller")
const app = express()
const port = 3000
require('dotenv').config()
console.log(process.env)

app.get('/', (req, res) => {
  
  res.send('Hello World!')
})

app.get('/create_link_token', async (req, res) => {
  res.send(await plaidController.createLinkToken())
})

app.listen(port, () => {
  console.log(`Budgeter App listening on port ${port}`)
})