import { Card, CardContent, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const Fullnamelist=()=>{
    const[data,setData]=useState([]);

    const getData=async()=>{
        const result=await axios.get("http://localhost:2020/fullname");
        setData(result.data);
    }
    useEffect(()=>{
        getData();
    },[data]);

    return(
        <Grid container spacing={2}>
                {
                    data.map((item)=>(
                        <Grid item xs={12}>
                            <Card sx={{bgcolor:"midnightblue",color:"white",height:"80px",lineHeight:"20px"}}>
                                <CardContent>
                                    <p>
                                    FullName: <b>{`${item.fname} ${item.lname}`}</b>
                                    </p>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                }
        </Grid>
    )
}