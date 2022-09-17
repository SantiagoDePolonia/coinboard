import { Button, Grid, Typography } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function AccountSection({address}) {
    return (<>
        <Grid container borderBottom="1px solid #CCC" paddingTop="0.7em" paddingBottom="1.2em" alignItems="flex-end">
            <Grid xs="7">
                <Grid container alignItems="flex-end">
                    <Grid xs="7">
                        <Typography fontWeight="bold">
                            Account 1 (wolny.eth)
                        </Typography>
                    </Grid>
                    <Grid xs="5">
                        <Button color="secondary" variant="outlined" size="small" top="-5px" onClick={(e) => {
                            e.preventDefault();
                            window.location.href = "/history/"+address;
                        }}>
                            history
                        </Button>
                    </Grid>
                </Grid>
                <Typography fontSize="0.8em">
                    <span><ContentCopyIcon color="primary" fontSize="0.6em"/></span> {address}
                </Typography>
            </Grid>
            <Grid xs="2" textAlign="right">
                <Typography fontWeight={"bold"} fontSize="1.2em">
                    $1,234.23
                </Typography>
            </Grid>
            <Grid xs="3" textAlign="right">
                <Button variant="contained" style={{paddingLeft:"40px",paddingRight:"40px"}}>
                    TRANSFER
                </Button>
            </Grid>

        </Grid>
    </>);
}
  
export default AccountSection;
