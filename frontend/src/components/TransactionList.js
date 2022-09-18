import { Grid, Typography } from "@mui/material";
import moment from 'moment';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Price from "./Price";

function TransactionList({transactions, myAddress}) {
    const transactionList = transactions.map(transaction => {
        const transactionType = myAddress.toLowerCase() === transaction.from ? 'sent' : 'received'; 
        const address1 = transactionType === 'sent' ? transaction.from : transaction.to;
        const address2 = transactionType === 'received' ? transaction.from : transaction.to;
        const icon = transactionType === 'sent' ? <ArrowForwardIcon />: <ArrowBackIcon />;

        const ts = new Date(transaction.timeStamp*1000);
        
        const datetime = moment(ts).format('YYYY-MM-DD HH:mm:ss');
        
        const valueEth = parseFloat(transaction.value) / 1000000000000000000.0;
        return (
            <Grid container key={transaction.hash} alignItems="flex-end" paddingTop="0.7em" paddingBottom="0.7em" borderTop="1px solid #CCC">
                <Grid item xs={5} textAlign={"left"}>
                    <Typography style={{fontSize: "1.2em"}}>
                        {datetime}
                    </Typography>
                    <Typography style={{fontSize: "0.85em"}}>
                        {address1}
                    </Typography>
                </Grid>
                <Grid item xs={2} textAlign={"center"}>
                    <Price price={valueEth} fontWeight="bold"/>
                    <Typography color={"secondary"}>
                        {icon}
                    </Typography>
                </Grid>
                <Grid item xs={5} textAlign={"right"}>
                    <Typography style={{fontSize: "0.85em"}}>
                        {address2}
                    </Typography>
                </Grid>
            </Grid>
        );
    });
    return (
        <>
            {transactionList}
        </>
    );
  }
  
  export default TransactionList;
  