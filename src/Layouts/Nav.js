import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useNavigate, Outlet } from "react-router-dom";
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider'
import { ButtonGroup, Container } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Nav() {
  const navigate = useNavigate();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

    return (
        <Container>
        <Box style={{display:'flex', }}>
        <Typography style={{flexGrow: 1,}}  variant='h4'>Questions</Typography>
        <Typography style={{marginTop:'13px'}}  variant='h7'>filter By</Typography>
        <FormControl sx={{ m: 1, width: 100 ,height:30}}>
        {/* <InputLabel id="demo-simple-select-label" style={{fontSize:'13px', marginBottom:'13px'}}></InputLabel> */}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          style={{height:'30px'}}
          onChange={handleChange}
        >
          <MenuItem value={1}>all</MenuItem>
          <MenuItem value={2}>latest</MenuItem>
          <MenuItem value={3}>oldest</MenuItem>
        </Select>
      </FormControl>
      </Box>
      <Divider/>
      <Stack direction="row" spacing={2}>
      <Button color="secondary" >all Questions</Button>
      <Button color="secondary">votes</Button>
      <Button  color="secondary" 
      onClick={() => { navigate("/admnDashboard/unanswered")}}
      >ununswered</Button>
    </Stack>
      
      <Divider/>
      </Container>
    )
}
