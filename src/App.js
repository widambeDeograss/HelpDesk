import { ThemeProvider , createTheme } from '@mui/material/styles';
// routes
import Router from './routes';
import  {BrowserRouter, Route, Routes} from 'react-router-dom';

import Nav from './Layouts/Nav'
// import Layout from './components/Layout'
// import AllQuestions from './pages/Qns'
// import AskQn from './pages/AskQn'
// import YourQns from './pages/YourQns'


const theme = createTheme({
  breakpoints:{
    values:{
      mobile:0,
      tablet:640,
      laptop:1200,
      desktop:12000,
    }
  },
  palette:{
    primary:{
      main:'#f3f3f3'
    }
  }
})
{/* <Router /> */}
function App() {
 return( 
  <ThemeProvider theme={theme}>
    <BrowserRouter>
    <Router />
   </BrowserRouter>
</ThemeProvider>
  );
}

export default App;

