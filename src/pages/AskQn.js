import { Button, Typography, Box } from "@mui/material";
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Send } from "@mui/icons-material";

const useStyles = makeStyles((theme) => {
    return {
      page: {
        width:'100%',
        height:window.innerHeight,
        justifyContent: "center",
      },
      qnarea: {
       width:'100%'
      },
      qnbox:{
        marginTop:'100px',
        marginLeft:'150px',
      }
    };
  });


export default function AskQn(props) {
    const [email, setemail] = useState('');
    const [question, setquestion] = useState('');
    const classes = useStyles();

  const handleChange = (e) => {
    const newqn = e.target.value
    setquestion(newqn);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  if (question === ''){
    console.log('error');
  }else{
    fetch('http://localhost:4000/userQuestions',{
      method:'POST',
      headers:{"content-type":"application/json"},
      body:JSON.stringify({email, question})
    });
    setquestion('');
  }
  }


  
  console.log(props);
  return (
    <div className={classes.page}>

          <Box
          className={classes.qnbox}
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 700,
          height: 300,
        },
      }}
    >
      <div style={{padding:"30px", textAlign:'center'}}>
          <Typography variant='h3'>Ask Your Question</Typography>
          <br/>
          <p>{question}</p>
          <form onSubmit={handleSubmit}>
          <FormControl className={classes.qnarea}>
            <InputLabel htmlFor="position-top">enter QN?</InputLabel>
            <Input
              id="position-top"
              type="text"
              value={question}
              onChange={handleChange}
            />
          </FormControl>
          <br/>
          <br/>
          <Button onClick={handleSubmit} color="secondary" variant="contained" endIcon={<Send/>}>
            {" "}
            sendQN
            
          </Button>
          </form>
        </div>
    </Box>
        

    </div>
  );
}
