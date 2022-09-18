import { useEffect, useState } from "react";
import { createTheme, Grid, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import themeOptions from "../theme";
import TopBar from "./TopBar";

import redstone from 'redstone-api';
import PricesContext from "../contexts/PricesContext";
import AccountsPage from "./AccountsPage";
import HistoryPage from "./HistoryPage";
import InvestmentsPage from "./InvestmentsPage";

import { useAccount, ConnectButton } from '@web3modal/react';

const theme = createTheme(themeOptions);

function CoinBoardApp() {
  const [prices, setPrices] = useState({
    ETH: undefined,
    DOT: undefined
  });

  const { chainSupported, address, chainId, connector } = useAccount();

  useEffect(() => {
    Object.keys(prices).forEach(function(key, _index) {
      if(!prices[key]) {
        redstone.getPrice(key).then(response => {
          setPrices(prices => ({ ...prices, [key]: response.value }));
        });
      }
    });
  }, [prices]);

  const loggedIn = !!address;

  return (
    <ThemeProvider theme={theme}>
      <PricesContext.Provider value={prices}>
        <Container fixed>
            <TopBar loggedIn={loggedIn} />
            {loggedIn ?
              (window.location.pathname === "/" && <AccountsPage />) ||
              (window.location.pathname.indexOf("/investments") === 0 && <InvestmentsPage />) ||
              (window.location.pathname.indexOf("/history") === 0 && <HistoryPage />)
            :
              <Grid container justifyContent="center">
                <Grid item marginTop="8em">
                  <ConnectButton />
                </Grid>
              </Grid>
            }
        </Container>
      </PricesContext.Provider>
    </ThemeProvider>
  );
}

export default CoinBoardApp;
