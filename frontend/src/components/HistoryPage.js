import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
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
            <Grid xs="2"></Grid>
            <Grid xs="8">
                <Typography variant="h4" style={{fontWeight:"bold"}}>
                    Transaction history - last 30 days
                </Typography>
                <Typography> for {address}</Typography>
                <div style={{paddingTop:"2em", marginBottom:"5em"}}>
                    {!transactions.length ?
                            "Loading..."
                        :
                            <TransactionList myAddress={address} transactions={transactions} />                                
                    }
                    {!transactionTotal ?
                            "Loading..."
                        :
                            <TransactionTotal total={transactionTotal} />
                    }
                </div>
            </Grid>
        </Grid>
    )
};

export default HistoryPage;