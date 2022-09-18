import { CircularProgress, Grid } from "@mui/material";

function CircularProgressCenter() {
    return (
        <Grid container justifyContent={"center"}>
            <Grid item paddingTop="4em" padingBottom="4em">
                <CircularProgress />
            </Grid>
        </Grid>
    );
}

export default CircularProgressCenter;