import React from "react";
import { Container, TextField, Button } from "@mui/material";
import { Telegram, Instagram, Phone } from "@mui/icons-material";
import "./contact.css";

const Contact = () => {
  const openTelegram = () => {
    window.open("https://t.me/@Abdumalikov_Iskandar", "_blank");
  };

  const openInstagram = () => {
    window.open("https://www.instagram.com/cristiano_uzb.fan/", "_blank");
  };

  const callPhone = () => {
    window.open("tel:+998 (88) 278 40 41");
  };

  return (
    <Container id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-icons">
        <Telegram fontSize="large" onClick={openTelegram} />
        <Instagram fontSize="large" onClick={openInstagram} />
        <Phone fontSize="large" onClick={callPhone} />
      </div>
      <form className="contact-form">
        <TextField label="Name" variant="outlined" fullWidth margin="normal" />
        <TextField label="Email" variant="outlined" fullWidth margin="normal" />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">
          Send
        </Button>
      </form>
    </Container>
  );
};

export default Contact;
