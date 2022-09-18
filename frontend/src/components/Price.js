import { useContext } from 'react';
import PricesContext from '../contexts/PricesContext';
import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from '@mui/material';

function Price({price, toFixed = 5, ...rest}) {
    const {ETH} = useContext(PricesContext);

    if(!price || !ETH) {
        return <CircularProgress />;
    }

    const usdPrice = price * ETH;

    return (
        <Typography
            title={Number(price).toFixed(toFixed)+" ETH"}
            {...rest}
        >
            ${Number(usdPrice).toFixed(2)}
        </Typography>
    )
}

export default Price;