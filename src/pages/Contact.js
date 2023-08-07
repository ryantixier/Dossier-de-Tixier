import React, { useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import emailjs from "@emailjs/browser";

export default function Contact() {
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

  return (
    // nest whole div in modal
    <div>
      <h1>Contact Page</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <TextField
            name="name"
            required
            label="Full Name"
            variant="standard"
          />
        </div>
        <div>
          <TextField
            required
            name="email"
            type="email"
            label="Email"
            variant="standard"
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
          />
        </div>
        <Button type="submit" variant="contained">
          Submit
        </Button>
        {/* add snackbar confirmation */}
      </form>
    </div>
  );
}
