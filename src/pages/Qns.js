import { Grid, Typography, Box } from "@mui/material";
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

export default function AllQuestions() {
  const classes = useStyles();
  const [qns, setqns] = useState([]);
  // const [HelpCount, setHelpCount] = useState(0);

  useEffect(() => {
    fetch('http://localhost:4000/Qns')
    .then(res => res.json())
    .then(data => setqns(data))
    }, []);


  return (
    <div>
      <Grid container>
        {qns.map((answer) => (
          <Grid item key={answer.id}>
            {" "}
            <Box className={classes.pages}>
              <div className={classes.answercontainer}>
              <div>
              <Typography variant='h5'>
                {" "}
                {answer.question}
              </Typography>
              <Typography variant='p'> {answer.answer}</Typography>
              </div>
              <FormGroup >
                <FormControlLabel
                
                  control={<Checkbox defaultChecked   sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }}} color="success" />}
                
                />
              </FormGroup>
              </div>
            </Box>
            <hr></hr>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}


