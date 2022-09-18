import { Grid, Typography } from "@mui/material";
import Price from "./Price";

function TransactionTotal({total}) {
    const sent = total.sent / 1000000000000000000.0;
    const received = total.received / 1000000000000000000.0;

    const balance = received - sent;

    return (
        <Grid container alignItems="flex-end" paddingTop="0.7em" paddingBottom="0.7em" borderTop="1px solid #CCC">
            <Grid item xs={5} textAlign={"left"}>
                Received:&nbsp;
                <Price price={received} color="green" fontWeight="bold" display="inline" />
            </Grid>
            <Grid item xs={5} textAlign={"center"}>
                Sent:&nbsp;
                <Price price={sent} color="red" fontWeight="bold" display="inline" />
            </Grid>
            <Grid item xs={2} textAlign={"right"}>
                Balance:&nbsp;
                <Price price={balance} color={balance < 0 ? "red" : "green"} fontWeight="bold" display="inline" />
            </Grid>
        </Grid>
    );
}

export default TransactionTotal;
  