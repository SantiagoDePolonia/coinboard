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
                <Typography fontSize="0.8em">
                    $1,234.23
                </Typography>
            </Grid>
        </Grid>
        <AccountSection address={"0x89E5916c19Df9A7e3Da2584F8aD3ee2D2e6Bd3c6"} />
    </>);
}
  
export default CoinSection;
  