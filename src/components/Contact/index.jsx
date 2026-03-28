import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  padding: 80px 24px;
  gap: 12px;

  @media (max-width: 768px) {
    padding: 64px 16px;
  }

  @media (max-width: 480px) {
    padding: 48px 16px;
  }
`;

const Title = styled(motion.div)`
  font-size: 32px;
  text-align: center;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

const Desc = styled(motion.div)`
  font-size: 16px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const StyledWrapper = styled.div`
  width: 95%;
  max-width: 560px;
  margin-top: 28px;

  @media (max-width: 768px) {
    width: calc(100% - 32px);
    margin: 20px 16px 0;
  }

  @media (max-width: 480px) {
    width: calc(100% - 24px);
    margin: 16px 12px 0;
  }

  .form-container {
    width: 100%;
    background: ${({ theme }) => theme.card};
    border: 1px solid ${({ theme }) => theme.card_border};
    padding: 32px 24px;
    font-size: 14px;
    font-family: inherit;
    color: ${({ theme }) => theme.text_primary};
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
    border-radius: 12px;
  }

  .form-container .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .form-container .form-group {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .form-container .form-group label {
    display: block;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.text_secondary};
    font-weight: 500;
    font-size: 13px;
  }

  .form-container .form-group input {
    width: 100%;
    padding: 10px 14px;
    border-radius: 8px;
    color: ${({ theme }) => theme.text_primary};
    font-family: inherit;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.card_border};
    outline: none;
    font-size: 15px;
    transition: border-color 0.15s ease;
    min-height: 44px;
  }

  .form-container .form-group textarea {
    width: 100%;
    padding: 10px 14px;
    border-radius: 8px;
    resize: none;
    color: ${({ theme }) => theme.text_primary};
    height: 96px;
    border: 1px solid ${({ theme }) => theme.card_border};
    background-color: transparent;
    font-family: inherit;
    outline: none;
    font-size: 15px;
    transition: border-color 0.15s ease;
  }

  .form-container .form-group input::placeholder,
  .form-container .form-group textarea::placeholder {
    opacity: 0.5;
    color: ${({ theme }) => theme.text_tertiary};
  }

  .form-container .form-group input:focus,
  .form-container .form-group textarea:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }

  .form-container .form-submit-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: inherit;
    color: ${({ theme }) => theme.white};
    font-weight: 500;
    width: auto;
    align-self: flex-start;
    background: ${({ theme }) => theme.primary};
    border: none;
    padding: 10px 24px;
    font-size: 14px;
    cursor: pointer;
    border-radius: 8px;
    transition: opacity 0.15s ease;
    min-height: 44px;
  }

  .form-container .form-submit-btn:hover:not(:disabled) {
    opacity: 0.9;
  }

  .form-container .form-submit-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    .form-container {
      padding: 24px 20px;
    }
  }
`;

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setOpen(true);
        form.current.reset();
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Contact
        </Title>
        <Desc
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Feel free to reach out for any questions or opportunities
        </Desc>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <StyledWrapper>
            <div className="form-container">
              <form ref={form} onSubmit={handleSubmit} className="form">
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input required name="email_id" id="email" type="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input required name="from_name" id="name" type="text" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input required name="subject" id="subject" type="text" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea required name="message" id="message" rows={10} cols={50} />
                </div>
                <button type="submit" className="form-submit-btn" disabled={loading}>
                  {loading ? 'Sending\u2026' : 'Send Message'}
                </button>
              </form>
            </div>
          </StyledWrapper>
        </motion.div>

        <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
          <MuiAlert onClose={() => setOpen(false)} severity="success" variant="filled">
            Message sent successfully!
          </MuiAlert>
        </Snackbar>
        <Snackbar open={error} autoHideDuration={6000} onClose={() => setError(false)}>
          <MuiAlert onClose={() => setError(false)} severity="error" variant="filled">
            Failed to send. Please try again or email directly.
          </MuiAlert>
        </Snackbar>
      </Wrapper>
    </Container>
  );
};

export default React.memo(Contact)
