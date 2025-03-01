import { useState } from 'react';
import {
  Contacts, ContactInfo, ContactTitle, ContactList, ContactListItem, ContactForm, 
  InputGroup, Input, Textarea, Button, Socials, SocialIcons, SocialIcon
} from './Contacts.styles';
import { Snackbar, Alert } from "@mui/material";
import snapchatLogo from '../../assets/snapchatlogocontacts.svg';
import facebookLogo from '../../assets/facebooklogocontacts.svg';
import xLogo from '../../assets/xlogocontats.svg';

export default function ContactsComponent() {
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [formData, setFormData] = useState({ email: '', name: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim().length < 2) {
      setErrorMessage('Name must be at least 2 characters.');
      return;
    }
    if (formData.message.trim().length < 10) {
      setErrorMessage('Message must be at least 10 characters.');
      return;
    }

    setErrorMessage(null);
    setSuccessMessage(true);
    setFormData({ email: '', name: '', message: '' });
  };

  return (
    <Contacts>
      <ContactInfo>
        <ContactTitle>Contacts</ContactTitle>
        <ContactList>
          <ContactListItem>8 800 000 00 00</ContactListItem>
          <ContactListItem>emailexample@email.com</ContactListItem>
        </ContactList>
        <ContactForm onSubmit={handleSubmit}>
          <InputGroup>
            <Input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <Textarea
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button type="submit">Send</Button>
        </ContactForm>
      </ContactInfo>
      <Socials>
        <p>Find us:</p>
        <SocialIcons>
          <a href="https://www.snapchat.com">
            <SocialIcon src={snapchatLogo} alt="Snapchat" />
          </a>
          <a href="https://www.facebook.com">
            <SocialIcon src={facebookLogo} alt="Facebook" />
          </a>
          <a href="https://twitter.com">
            <SocialIcon src={xLogo} alt="X" />
          </a>
        </SocialIcons>
      </Socials>

      <Snackbar
        open={successMessage}
        autoHideDuration={3000}
        onClose={() => setSuccessMessage(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={() => setSuccessMessage(false)} severity="success">
          Your message has been sent!
        </Alert>
      </Snackbar>

      <Snackbar
        open={Boolean(errorMessage)}
        autoHideDuration={3000}
        onClose={() => setErrorMessage(null)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={() => setErrorMessage(null)} severity="error">
          {errorMessage}
        </Alert>
      </Snackbar>
    </Contacts>
  );
}
