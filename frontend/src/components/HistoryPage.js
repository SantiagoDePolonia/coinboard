import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import TransactionList from "./TransactionList";

const HistoryPage = () => {
    const [transactions, setTransactions] = useState([]);
    const address = window.location.pathname.split("/").at(-1);

    useEffect(() => {
        fetch(`http://localhost:3001/api/transactions?address=${address}`).then(response => {

            // TODO: Add error reporting
            return response.json();
        }).then(json => {
            setTransactions(json);
        });
    }, []);

    return (
        <Grid container>
            <Grid xs="2"></Grid>
            <Grid xs="8">
                <Typography variant="h4" style={{fontWeight:"bold"}}>
                    Transaction history
                </Typography>
                <Typography> for {address}</Typography>
                <div style={{paddingTop:"2em"}}>
                    {!transactions.length ?
                            "Loading..."
                        :
                            <TransactionList myAddress={address} transactions={transactions} />
                    }
                </div>
            </Grid>
        </Grid>
    )
};

export default HistoryPage;