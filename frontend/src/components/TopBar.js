import { Grid, Link } from "@mui/material";
import MenuItem from "./MenuItem";

import SettingsIcon from '@mui/icons-material/Settings';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

function TopBar() {
  return (
    <header>
        <Grid container spacing={3} marginBottom="5em" paddingTop="1em">
            <Grid item xs={2}>
                <Link
                    href={"/"}
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href = "/";
                    }}
                    style={{coursor:"pointer"}}
                >
                    <img src='/logo-xs.png' alt="Coin Board - logo" style={{width:"100%"}}/>
                </Link>
            </Grid>
            <Grid item xs={7} marginTop="1.7em">
                <MenuItem href="/" active>Accounts</MenuItem>
                <MenuItem href="/investments">Investments</MenuItem>                
            </Grid>
            <Grid item xs={3} marginTop="1.7em" textAlign={"right"}>
                <SettingsIcon />
                <span style={{paddingLeft:"0.4em"}}>
                    <PowerSettingsNewIcon/>
                </span>
            </Grid>
        </Grid>
    </header>
  );
}

export default TopBar;
