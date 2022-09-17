## Documentation

#### /frontend 
The directory contains frontend part of the app

#### /api
The directory contains backend part. It's an API for requesting transaction history from etherscan.io

It's listening on the port 3001

##### How to run the API?

1. Get API key from etherscan.io .
2. Add api key to the file: `.env` (based on `.ethexample`)


```
$ npm start
```

Example query URL: http://localhost:3001/api/transactions?address=0x89E5916c19Df9A7e3Da2584F8aD3ee2D2e6Bd3c6
