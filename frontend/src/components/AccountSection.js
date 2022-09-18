import { Button, Grid, Typography } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function AccountSection({address}) {
    return (<>
        <Grid container borderBottom="1px solid #CCC" paddingTop="0.7em" paddingBottom="1.2em" alignItems="flex-end">
            <Grid item xs="7">
                <Grid container alignItems="flex-end" marginBottom="0.3em">
                    <Grid item xs="7">
                        <Typography fontWeight="bold">
                            Account 1 (wolny.eth)
                        </Typography>
                    </Grid>
                    <Grid item xs="5">
                        <Button
                            style={{lineHeight:"0.8em", position:"relative", top: "-0.4em"}}
                            color="secondary" variant="outlined" size="small" onClick={(e) => {
                                e.preventDefault();
                                window.location.href = "/history/"+address;
                            }}
                        >
                            history
                        </Button>
                        <Button
                            style={{lineHeight:"0.8em", position:"relative", top: "-0.4em", marginLeft:"0.5em"}}
                            color="secondary" variant="outlined" size="small" 
                            href={`https://buy.ramp.network/?userAddress=${address}&defaultAsset=ETH_ETH`}
                            target="_blank"
                        >
                            TOP UP
                        </Button>

                    </Grid>
                </Grid>
                <Typography fontSize="0.8em">
                    <a
                        onClick={
                            () => {navigator.clipboard.writeText(address)}
                        }
                        style={{cursor:"pointer"}}>
                        <ContentCopyIcon color="primary" fontSize="0.6em"/>
                    </a> {address}
                </Typography>
            </Grid>
            <Grid item xs="2" textAlign="right">
                <Typography fontWeight={"bold"} fontSize="1.2em">
                    $1,234.23
                </Typography>
            </Grid>
            <Grid item xs="3" textAlign="right">
                <Button variant="contained" style={{paddingLeft:"40px",paddingRight:"40px"}}>
                    TRANSFER
                </Button>
            </Grid>

        </Grid>
    </>);
}
  
export default AccountSection;
