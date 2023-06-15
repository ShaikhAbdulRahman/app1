import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

export const AddFullname=()=>{
    const[data,setData]=useState("");
    const[data2,setData2]=useState("");

    const handleAdd=()=>{
        const payload={
            fname:data,
            lname:data2,
        };
        axios.post("http://localhost:2020/addfullname", payload);
        setData("");
        setData2("")
    }
    const handleRemove=()=>{
        const payload1={
            fname:data,
            lname:data2,
        };
        axios.post("http://localhost:2020/delfullname", payload1);
        setData("");
        setData2("");
    }

    return(
        <Grid container spacing={2}>
            <Grid item xs={11} sx={{marginLeft:"20px"}}>
                <TextField sx={{marginTop:"50px"}} value={data} onChange={(e)=>setData(e.target.value)} variant="outlined" label="Fname" fullWidth />
            </Grid>
            <Grid item xs={11} sx={{marginLeft:"20px"}}>
                <TextField value={data2} onChange={(e)=>setData2(e.target.value)} variant="outlined" label="Lname" fullWidth />
            </Grid>
            <Grid item xs={5.5} sx={{marginLeft:"20px"}} >
                <Button sx={{height:"50px"}} onClick={handleAdd} variant="contained" fullWidth>Submit</Button>
            </Grid>
            <Grid item xs={5.5}>
                <Button onClick={handleRemove} sx={{height:"50px"}} variant="contained" fullWidth color="error">Cancel</Button>
            </Grid>
        </Grid>
    )
}