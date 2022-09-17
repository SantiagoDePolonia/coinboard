const express = require('express');
const cors = require('cors');
const { default: fetch } = require('node-fetch');
const { response } = require('express');
const app = express();

app.use(cors());

require('dotenv').config()

const port = 3001;

app.get('/api/transactions', async (req, res) => {
  const { address } = req.query;
  
  // get Date one month ago!
  const date = new Date();
  date.setDate(date.getDate() - 30);

  const timestampOneMonthAgo = Math.round(date.getTime()/1000);

  const transactions = await fetch(
    `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&apikey=${process.env.ETHERSCAN_API_KEY}`
    )
    .then(response => response.json())
    .then(responseJson => responseJson.result);

  const transactionsLastMonth = transactions.filter(transaction => 
    (transaction.timeStamp >= timestampOneMonthAgo) && transaction.value != 0).reverse() ;
  return res.send(transactionsLastMonth);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});
