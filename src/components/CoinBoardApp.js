import { createTheme, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import themeOptions from "../theme";
import AccountsList from "./AccountsList";
import TopBar from "./TopBar";
import TotalBalanceFooter from "./TotalBalanceFooter";

const theme = createTheme(themeOptions);

function CoinBoardApp() {
  return (
    <ThemeProvider theme={theme}>
        <Container fixed>
            <TopBar />
            <AccountsList />
            <TotalBalanceFooter />
        </Container>
    </ThemeProvider>
  );
}

export default CoinBoardApp;
