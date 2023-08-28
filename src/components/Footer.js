import * as React from "react";
import { Link } from "@mui/material";
import { Paper } from "@mui/material";
import { Box } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "../App.css";

import { useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import emailjs from "@emailjs/browser";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export default function Footer() {
  const LinkedIn = "https://www.linkedin.com/in/ryan-tixier-b8988470/";
  const GitHub = "https://github.com/ryantixier";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z87h71g",
        "template_ly1qfsa",
        form.current,
        "aK6ZalbFWyQ1ymtan"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box
        sx={{
          borderTop: "40px blue",
          color: "black",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <BottomNavigation showLabels>
          <div className="name">Ryan Tixier</div>
          <BottomNavigationAction
            component={Link}
            href={LinkedIn}
            label="LinkedIn"
            icon={<LinkedInIcon />}
          />
          <BottomNavigationAction
            component={Link}
            href={GitHub}
            label="Github"
            icon={<GitHubIcon />}
          />
          <BottomNavigationAction
            onClick={handleOpen}
            label="Contact"
            icon={<EmailIcon />}
          />
          <div>
            <Modal
              className="modal"
              open={open}
              onSubmit={handleClose}
              aria-labelledby="contact-me-modal"
              aria-describedby="contact-me-modal"
            >
              <Box sx={modalStyle}>
                <form className="contact-form" ref={form} onSubmit={sendEmail}>
                  <h3>Contact</h3>
                  <div>
                    <TextField
                      name="name"
                      required
                      label="Full Name"
                      variant="standard"
                      fullWidth
                    />
                  </div>
                  <div>
                    <TextField
                      required
                      name="email"
                      type="email"
                      label="Email"
                      variant="standard"
                      fullWidth
                    />
                  </div>
                  <div>
                    <TextField
                      required
                      name="message"
                      label="Message"
                      variant="standard"
                      multiline
                      minRows={4}
                      maxRows={7}
                      fullWidth
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{ marginTop: "10px" }}
                  >
                    Submit
                  </Button>
                  {/* add snackbar confirmation */}
                </form>
              </Box>
            </Modal>
          </div>
        </BottomNavigation>
      </Box>
      <Box sx={{ width: "600px", color: "black" }}></Box>
    </>
  );
}

// need linkedin link
// need gmail link
// need GH link
// incorporate avatar
// add icons from material ui
