import { Grid, Typography } from "@mui/material";
import AccountSection from "./AccountSection";

function CoinSection() {
    return (<>
        {/* header */}
        <Grid container borderBottom="1px solid #CCC">
            <Grid xs="9">
                <Typography>
                    ETHEREUM
                </Typography>
            </Grid>
            <Grid xs="3" textAlign="right">
                <Typography>
                    $1,234.23
                </Typography>
            </Grid>
        </Grid>
        <AccountSection />
    </>);
}
  
export default CoinSection;
  