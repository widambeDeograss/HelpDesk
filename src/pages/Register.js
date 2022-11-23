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
    regbox:{
      marginTop:'150px',
      marginLeft:'350px',
    }
  };
});

export default function Register(props) {
  const [email, setemail] = useState('');

  const handleChange = (e) => {
    const newvalue = e.target.value
    setemail(newvalue);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  if (email === ''){
    console.log('error');
  }else{
    fetch('http://localhost:4000/users',{
      method:'POST',
      headers:{"content-type":"application/json"},
      body:JSON.stringify({email})
    });
    setemail('');
  }
  }


  const classes = useStyles();
  console.log(props);
  return (
    <div className={classes.page}>

          <Box
          className={classes.regbox}
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 400,
          height: 200,
        },
      }}
    >
      <div style={{padding:"10px", textAlign:'center'}}>
          <Typography variant='h5'>Register To HelpDesk</Typography>
          <br/>
          <p>{email}</p>
          <form onSubmit={handleSubmit}>
          <FormControl>
            <InputLabel htmlFor="position-top">enter your email adress</InputLabel>
            <Input
              id="position-top"
              type="email"
              value={email}
              onChange={handleChange}
            />
          </FormControl>
          <br/>
          <br/>
          <Button onClick={handleSubmit} color="secondary" variant="contained">
            {" "}
            submit
            <Send/>
          </Button>
          </form>
        </div>
    </Box>
        

    </div>
  );

  
}


