import { Grid, Typography } from "@mui/material";
import AccountSection from "./AccountSection";

function CoinSection({address,balance}) {
    
    return (<>
        {/* header */}
        <Grid container borderBottom="1px solid #CCC">
            <Grid xs="9">
                <Typography>
                    ETHEREUM
                </Typography>
            </Grid>
            <Grid xs="3" textAlign="right">
                <Typography fontSize="0.8em">
                    {balance}
                </Typography>
            </Grid>
        </Grid>
        <AccountSection address={address} balance={balance} />
    </>);
}
  
export default CoinSection;
  