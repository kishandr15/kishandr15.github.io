import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import Snackbar from '@mui/material/Snackbar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled(motion.div)`
  font-size: 42px;
  text-align: center;
  font-weight: 700;
  margin-top: 20px;
  background: linear-gradient(
    135deg, 
    ${({ theme }) => theme.text_primary} 0%, 
    ${({ theme }) => theme.primary_light} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled(motion.div)`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled(motion.form)`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 36px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.card_border};
  box-shadow: ${({ theme }) => theme.shadow_md};
  margin-top: 28px;
  gap: 16px;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: ${({ theme }) => theme.shadow_lg};
  }
  
  @media (max-width: 768px) {
    padding: 24px;
    width: calc(100% - 32px);
    margin: 20px 16px 0;
  }
  
  @media (max-width: 480px) {
    padding: 20px;
    width: calc(100% - 24px);
    margin: 16px 12px 0;
    gap: 14px;
  }
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: ${({ theme }) => theme.card_light};
  border: 1px solid ${({ theme }) => theme.card_border};
  outline: none;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 10px;
  padding: 14px 18px;
  transition: all 0.3s ease;
  min-height: 44px;
  
  &::placeholder {
    color: ${({ theme }) => theme.text_secondary};
  }
  
  &:focus {
    border: 2px solid ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primary_alpha};
    background-color: ${({ theme }) => theme.card};
  }
  
  @media (max-width: 480px) {
    font-size: 16px;
    padding: 12px 16px;
    min-height: 44px;
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: ${({ theme }) => theme.card_light};
  border: 1px solid ${({ theme }) => theme.card_border};
  outline: none;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 10px;
  padding: 14px 18px;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: ${({ theme }) => theme.text_secondary};
  }
  
  &:focus {
    border: 2px solid ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primary_alpha};
    background-color: ${({ theme }) => theme.card};
  }
  
  @media (max-width: 480px) {
    font-size: 16px;
    padding: 12px 16px;
    min-height: 100px;
  }
`;

const ContactButton = styled(motion.input)`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: ${({ theme }) => theme.gradient_primary};
  padding: 16px 24px;
  margin-top: 8px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.white};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadow_md};
  min-height: 44px;
  
  @media (max-width: 480px) {
    font-size: 16px;
    padding: 14px 20px;
    min-height: 44px;
  }
`;

const Contact = () => {
  const [open, setOpen] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_gfgm3em', 'template_mp244im', form.current, 'Pm1NSiNNekWnVjghg')
      .then((result) => {
        setOpen(true);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact
        </Title>
        <Desc
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Feel free to reach out to me for any questions or opportunities!
        </Desc>

        <ContactForm
          ref={form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder="Your Email" name="email_id" required />
          <ContactInput placeholder="Your Name" name="from_name" required />
          <ContactInput placeholder="Subject" name="subject" required />
          <ContactInputMessage placeholder="Message" rows="4" name="message" required />
          <ContactButton
            type="submit"
            value="Send"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          />
        </ContactForm>

        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </Wrapper>
    </Container>
  );
};

export default React.memo(Contact)
