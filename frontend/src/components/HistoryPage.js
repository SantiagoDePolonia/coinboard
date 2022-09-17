import { Grid, Typography } from "@mui/material";
import { useState } from "react";

const HistoryPage = () => {
    const [transactions, setTransactions] = useState([]);
    const address = window.location.pathname.split("/").at(-1);

    return (
        <Grid container>
            <Grid xs="2"></Grid>
            <Grid xs="8">
                <Typography variant="h4" style={{fontWeight:"bold"}}>Transactions history</Typography><Typography> for {address}</Typography>
                {!transactions.length ? "Loading..." : <></>}
            </Grid>
        </Grid>
    )
};

export default HistoryPage;