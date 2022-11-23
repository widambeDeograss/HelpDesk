import { Grid, Typography, Box, Divider } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { makeStyles } from "@mui/styles";
import React from "react";
import {useState, useEffect} from 'react';


const useStyles = makeStyles((theme) => {
    return {
      pages: {
        padding: "20px",
        textAlign: "centre",
      },
      answercontainer:{
        display:'flex',
        padding:theme.spacing(2)
      },
      checkbox:{
        display:'block',
      }
    };
  });


export default function YourQns() {
    const classes = useStyles();
    const [qns, setqns] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:4000/userQuestions')
      .then(res => res.json())
      .then(data => setqns(data))
      }, []);


    return (
        <div>
        <Grid container sm={12} xl={12}>
          {qns.map((answer) => (
            <Grid item key={answer.id}>
              {" "}
              <Box className={classes.pages}>
                <div className={classes.answercontainer}>
                
                <Typography variant='h5'>
                  {" "}
                  {answer.question}
                </Typography>
                <Divider/>
                <Typography variant='p'> {answer.email}</Typography>
                
                <FormGroup >
                  <FormControlLabel
                  
                    control={<Checkbox defaultChecked   sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }}} color="success" />}
                  
                  />
                </FormGroup>
                </div>
              </Box>
              <Divider/>
            </Grid>
          ))}
        </Grid>
      </div>
    );
    
}
