const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// Set up Warp instance for Arweave mainnet
WP.LoggerFactory.INST.logLevel('debug');
const warp = WP.WarpFactory.forMainnet();

require('dotenv').config()

const port = 3001;

app.get('/api/announcements', async (req, res) => {
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});
