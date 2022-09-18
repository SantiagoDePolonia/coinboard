import { CircularProgress, Grid } from "@mui/material";
import CoinSection from "./CoinSection";
import { useAccount } from '@web3modal/react';
import { useBalance } from '@web3modal/react';
import TotalBalanceFooter from "./TotalBalanceFooter";

function CoinsList() {
    const { address } = useAccount();
    const { refetch, isLoading, error, balance } = useBalance({addressOrName: address, chainId: "eip155:1"});

    
    return (
        <Grid container>
            <Grid item xs="2"></Grid>
            <Grid item xs="8">
                {isLoading ? <CircularProgress /> :
                    <CoinSection address={address} balance={balance} />
                }
            </Grid>
            <TotalBalanceFooter balance={balance} />
        </Grid>
    );
}

export default CoinsList;
  