import { Grid } from "@mui/material";
import CoinSection from "./CoinSection";
import { useAccount } from '@web3modal/react';
import { useBalance } from '@web3modal/react';

function CoinsList() {
    const { address } = useAccount();
    const { refetch, isLoading, error, balance } = useBalance({addressOrName: address});

    return (
        <Grid container>
            <Grid xs="2">

            </Grid>
            <Grid xs="8">
                <CoinSection address={address} balance={balance}/>                
            </Grid>

        </Grid>
    );
}

export default CoinsList;
  