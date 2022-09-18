import { Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CircularProgressCenter from "./CircularProgressCenter";
import TransactionList from "./TransactionList";
import TransactionTotal from "./TransactionTotal";

const HistoryPage = () => {
    const [transactions, setTransactions] = useState([]);
    const [transactionTotal, setTransactionTotal] = useState();

    const address = window.location.pathname.split("/").at(-1);

    useEffect(() => {
        fetch(`http://localhost:3001/api/transactions?address=${address}`).then(response => {

            // TODO: Add error reporting
            return response.json();
        }).then(json => {
            setTransactions(json);
        });
    }, []);

    useEffect(() => {
        fetch(`http://localhost:3001/api/balance30days?address=${address}`).then(response => {

            // TODO: Add error reporting
            return response.json();
        }).then(json => {
            setTransactionTotal(json);
        });
    }, []);


    return (
        <Grid container>
            <Grid item xs="2"></Grid>
            <Grid item xs="8">
                <Typography variant="h4" style={{fontWeight:"bold"}}>
                    Transaction history - last 30 days
                </Typography>
                <Typography> for {address}</Typography>
                <div style={{paddingTop:"2em", marginBottom:"2em"}}>
                    {!transactions.length ?
                            <CircularProgressCenter />
                        :
                            <TransactionList myAddress={address} transactions={transactions} />                                
                    }
                    {!transactionTotal ?
                            <CircularProgressCenter />
                        :
                            <TransactionTotal total={transactionTotal} />
                    }
                </div>
                <Button variant="outlined" color="secondary" marginBottom="3em">
                    ← Back to your accounts
                </Button>
            </Grid>
        </Grid>
    )
};

export default HistoryPage;