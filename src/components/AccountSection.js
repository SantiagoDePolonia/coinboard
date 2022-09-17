import { Button, Grid, Typography } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function AccountSection() {
    return (<>
        <Grid container borderBottom="1px solid #CCC" paddingTop="1.5em" paddingBottom="1.5em" alignItems="flex-end">
            <Grid xs="7">
                <Typography fontWeight="bold">
                    Account 1 (wolny.eth)
                </Typography>
                <Typography fontSize="0.8em">
                    <span><ContentCopyIcon color="primary" fontSize="0.6em"/></span> 0x89E5916c19Df9A7e3Da2584F8aD3ee2D2e6Bd3c6
                </Typography>
            </Grid>
            <Grid xs="2" textAlign="right">
                <Typography>
                    $1,234.23
                </Typography>
            </Grid>
            <Grid xs="3" textAlign="right">
                <Button variant="contained">
                    TRANSFER
                </Button>
            </Grid>

        </Grid>
    </>);
}
  
export default AccountSection;
