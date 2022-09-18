import { Grid, Typography } from "@mui/material";

function TransactionTotal({total}) {
    const sent = total.sent / 1000000000000000000.0;
    const received = total.received / 1000000000000000000.0;

    const balance = received - sent;
    return (
        <Grid container alignItems="flex-end" paddingTop="0.7em" paddingBottom="0.7em" borderTop="1px solid #CCC">
            <Grid item xs={5} textAlign={"left"}>
                Received: 
                <Typography color="green" style={{fontWeight:"bold"}}>
                    {Number((received).toFixed(5))} ETH
                </Typography>
            </Grid>
            <Grid item xs={5} textAlign={"center"}>
                Sent: 
                <Typography color="red" style={{fontWeight:"bold"}}>
                    {Number((sent).toFixed(5))} ETH
                </Typography>
            </Grid>
            <Grid item xs={2} textAlign={"right"}>
                Balance: 
                <Typography color="green" style={{fontWeight:"bold"}}>
                    {Number((balance).toFixed(5))} ETH
                </Typography>
            </Grid>
        </Grid>
    );
}

export default TransactionTotal;
  