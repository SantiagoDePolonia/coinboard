import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import themeOptions from "../theme";
import TopBar from "./TopBar";

import redstone from 'redstone-api';
import PricesContext from "../contexts/PricesContext";
import AccountsPage from "./AccountsPage";
import HistoryPage from "./HistoryPage";
import InvestmentsPage from "./InwestmentsPage";

const theme = createTheme(themeOptions);

function CoinBoardApp() {
  const [prices, setPrices] = useState({
    ETH: undefined,
    DOT: undefined
  });

  useEffect(() => {
    Object.keys(prices).forEach(function(key, _index) {
      if(!prices[key]) {
        redstone.getPrice(key).then(response => {
          console.log("key", key);
          setPrices(prices => ({ ...prices, [key]: response.value }));
        });
        console.log("prices", prices);
      }
    });
  }, [prices]);

  const loggedIn = true;
  console.log("history", window.location.pathname.indexOf("/history"))
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
              <span>Log in</span>
            }
        </Container>
      </PricesContext.Provider>
    </ThemeProvider>
  );
}

export default CoinBoardApp;
