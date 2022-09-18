# Documentation

### /frontend 
The directory contains frontend part of the app

##### How to run the frontend?

```bash
$ npm start
```

### /api
The directory contains backend part. It's an API for requesting transaction history from etherscan.io

It's listening on the port 3001

##### How to run the API?

1. Get API key from `etherscan.io`.
2. Get API key from Dune company.
3. Gen projectId from `walletconnect.com`.
4. Add api keys to the file: `.env` (based on `.env.example`).
5. Add walletconnect projectId to the `frontend/src/consts/walletconnect.js`.

```bash
$ npm start
```

Example query URLs:
- transaction history last 30 days:
  - http://localhost:3001/api/transactions?address=0x89E5916c19Df9A7e3Da2584F8aD3ee2D2e6Bd3c6
- balance last 30 days (powered by duna)
  - http://localhost:3001/api/balance30days?address=0x89e5916c19df9a7e3da2584f8ad3ee2d2e6bd3c6

### Dune API query - spent and received coins

```sql
SELECT
    SUM(value) as value
    FROM ethereum.transactions
    WHERE
        from="0x89e5916c19df9a7e3da2584f8ad3ee2d2e6bd3c6" AND
        block_time > now() - interval '30 days'
UNION SELECT
    SUM(value) as value
    FROM ethereum.transactions
    WHERE 
        to="0x89e5916c19df9a7e3da2584f8ad3ee2d2e6bd3c6" AND
        block_time > now() - interval '30 days'

```
