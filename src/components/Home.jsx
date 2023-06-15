import { Grid } from "@mui/material";
import React from "react";
import { Fullname } from "./Fullname";

export const Home=()=>{
    return(
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Fullname/>
            </Grid>
        </Grid>
    )
}