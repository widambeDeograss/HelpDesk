import { Button, Popover, Typography, Box } from "@mui/material";
import Input from "@mui/material/Input";
import Layout from "../Layouts/Layout";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { useEffect, useState } from "react";
import React from "react";
import { Login } from "@mui/icons-material";

export default function LoginPage(props) {
  const [Users, setUsers] = useState([]);
  const [user, setuser] = useState("");
  const [FoundUser, setFoundUser] = useState("");
  const [isLoggedin, setisLoggedin] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleChange = (e) => {
    const newuser = e.target.value;
    setuser(newuser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const usersEmails = [];

    if (Users.length === 0) {
    } else {
      Users.forEach((userobj) => {
        usersEmails.push(userobj.email);
      });

      usersEmails.forEach((email) => {
        if (email === user) {
          setFoundUser(email);
          setisLoggedin(true);
        } 
      })
      setuser("");
      props.handleClose()
    }
  };
  return (
    <div>
      <Popover
        open={props.openEl}
        // anchorEl={props.archorEl}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 200, left: 400 }}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            background: "#f3f3f3",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 500,
              height: 200,
            },
          }}
        >
          <div style={{ padding: "10px", textAlign: "center" }}>
            <Typography>Login To HelpDesk </Typography>
            {/* <Typography style={{poi}}>x</Typography> */}
            <form onSubmit={handleSubmit}>
              <FormControl variant="outlined">
                <InputLabel htmlFor="position-top">
                  enter your email adress
                </InputLabel>
                <Input
                  id="position-top"
                  type="email"
                  value={user}
                  onChange={handleChange}
                />
              </FormControl>
              <br />
              <br />
              <Button
                type="submit"
                color="secondary"
                variant="contained"
              >
                {" "}
                Login
                <Login />
              </Button>
              <div style={{ display: "none" }}>
                  <Layout user={FoundUser} Loggedin={isLoggedin} />
                </div>
            </form>
          </div>
        </Box>
      </Popover>
    </div>
  );
}
