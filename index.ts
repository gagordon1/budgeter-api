import * as express from "express";
import * as cors from "cors";
const config = require("./config.json")
const app = express()
app.use(cors({
    origin: config.DEVELOPMENT? "http://localhost:3000" : ""
}));
const port = 8080
const plaidController = require( "./controllers/plaid-controller")



app.get('/', (req, res) => {
  
  res.send('Hello World!')
})

app.post('/create_link_token', async (req, res) => {
  res.send({
    "token" : await plaidController.createLinkToken()
  })
})

app.listen(port, () => {
  console.log(`Budgeter App listening on port ${port}`)
})