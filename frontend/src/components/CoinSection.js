import { Grid, Typography } from "@mui/material";
import AccountSection from "./AccountSection";
import Price from "./Price";

function CoinSection({address,balance}) {
    
    return (<>
        {/* header */}
        <Grid container borderBottom="1px solid #CCC">
            <Grid item xs="9">
                <Typography>
                    ETHEREUM
                </Typography>
            </Grid>
            <Grid item xs="3" textAlign="right">
                <Price price={balance} fontSize="0.8em"/>
            </Grid>
        </Grid>
        <AccountSection address={address} balance={balance} />
    </>);
}
  
export default CoinSection;
  