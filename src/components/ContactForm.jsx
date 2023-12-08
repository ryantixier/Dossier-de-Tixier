import React from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function ContactForm() {
  return (
    // nest whole div in modal
    <div>
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
      <Button type="submit" variant="outlined" sx={{ marginTop: "10px" }}>
        Submit
      </Button>
    </div>
  );
}
