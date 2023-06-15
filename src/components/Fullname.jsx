import React from "react";
import { Grid,Card, CardContent } from "@mui/material";
import { AddFullname } from "./AddFullname";
import { Fullnamelist } from "./Fullnamelist";

export const Fullname=()=>{
    return(
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Card sx={{height:"500px"}}>
                    <CardContent>
                    <h2 style={{color:"red",textAlign:"center",marginTop:"60px"}}>Add Fullname</h2>
                        <AddFullname/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card>
                    <CardContent>
                        <h2 style={{color:"red",textAlign:"center",marginTop:"60px"}}>Show Name's</h2>
                        <Fullnamelist/>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}