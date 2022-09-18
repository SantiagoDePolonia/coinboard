const express = require('express');
const cors = require('cors');
const { default: fetch } = require('node-fetch');
const { Headers } = require('node-fetch');
const app = express();

app.use(cors());

require('dotenv').config()

const port = 3001;

const duneHeaders = new Headers({
  "x-dune-api-key": process.env.DUNA_API_KEY
});

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

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

app.get('/api/balance30days', async (req, res) => {
  const { address: _address } = req.query;
  
  // 1. To execute query.
  const { execution_id } = await fetch('https://api.dune.com/api/v1/query/1279931/execute', {
    method: 'POST',
    headers: duneHeaders,
  }).then(response => response.json());

  let execution_status = false;

  // 2. To wait for QUERY_STATE_COMPLETED execution status.
  let iteration = 1;
  while((execution_status != "QUERY_STATE_COMPLETED") && (iteration < 100)) {
    await sleep(4000);
    const result = await fetch(`https://api.dune.com/api/v1/execution/${execution_id}/status`, {
      headers: duneHeaders,
    }).then(response => response.json());

    execution_status = result.state;
    
    iteration++;
  }

  // 3. Get execution results.
  const response = await fetch(`https://api.dune.com/api/v1/execution/${execution_id}/results`, {
    headers: duneHeaders,
  }).then(response => response.json())
  .then(responseJson => responseJson.result.rows);

  return res.send({sent: response[0].value, received: response[1].value});
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});
