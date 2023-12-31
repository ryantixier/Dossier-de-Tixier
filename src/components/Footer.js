import * as React from "react";
import { useRef } from "react";

import { Link } from "@mui/material";
import { Box } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "../App.css";
import Modal from "@mui/material/Modal";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import ContactForm from "./ContactForm";

import emailjs from "@emailjs/browser";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 320,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export default function Footer() {
  const LinkedIn = "https://www.linkedin.com/in/ryan-tixier/";
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
          handleOpenSnack();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // snackbar functionality
  const [openSnack, setOpenSnack] = React.useState(false);
  const handleOpenSnack = () => {
    setOpenSnack(true);
  };

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  };

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
            target="_blank"
            label="LinkedIn"
            icon={<LinkedInIcon />}
          />
          <BottomNavigationAction
            component={Link}
            href={GitHub}
            target="_blank"
            label="GitHub"
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
              onClose={handleClose}
              aria-labelledby="contact-me-modal"
              aria-describedby="contact-me-modal"
            >
              <Box sx={modalStyle}>
                <form className="contact-form" ref={form} onSubmit={sendEmail}>
                  <ContactForm />
                </form>
              </Box>
            </Modal>
            <Snackbar
              open={openSnack}
              autoHideDuration={6000}
              onClose={handleCloseSnack}
            >
              <Alert severity="success" color="info">
                Form Submitted
              </Alert>
            </Snackbar>
          </div>
        </BottomNavigation>
      </Box>
    </>
  );
}
