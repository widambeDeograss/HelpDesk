import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Login } from "@mui/icons-material";
import { Send } from "@mui/icons-material";

export default function AnswerQn({ onAnswer, qn_id }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [Answer, setAnswer] = React.useState("");

  const handleChange = (event) => {
    const answer_to_qn = event.target.value;
    setAnswer(answer_to_qn);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        AnswerQn
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 100, left: 400 }}
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
              p: 2,
              width: 500,
              height: 300,
            },
          }}
        >
          <div style={{ padding: "10px", textAlign: "center" }}>
            <Typography variant="h5">{onAnswer}</Typography>
            <p style={{ textAlign: "left" }}>aswer QN: {qn_id}</p>
            <p style={{ textAlign: "left" }}>{Answer}</p>
            <form>
              <FormControl variant="outlined" style={{ width: "100%" }}>
                <InputLabel htmlFor="position-top">
                  enter the answer to the above question
                </InputLabel>
                <Input
                  id="position-top"
                  type="email"
                  value={Answer}
                  onChange={handleChange}
                />
              </FormControl>
              <br />
              <br />
              <br />
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                endIcon={<Send />}
              >
                {" "}
                SEND ANSWER
              </Button>
            </form>
          </div>
        </Box>
      </Popover>
    </div>
  );
}
