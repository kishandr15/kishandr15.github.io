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

const StyledWrapper = styled.div`
  width: 95%;
  max-width: 600px;
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
    background: linear-gradient(${({ theme }) => theme.card}, ${({ theme }) => theme.card}) padding-box,
                linear-gradient(145deg, transparent 35%, ${({ theme }) => theme.primary_light}, ${({ theme }) => theme.primary}) border-box;
    border: 2px solid transparent;
    padding: 32px 24px;
    font-size: 14px;
    font-family: inherit;
    color: ${({ theme }) => theme.text_primary};
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
    border-radius: 16px;
    background-size: 200% 100%;
    animation: gradient 5s ease infinite;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }

  .form-container button:active {
    scale: 0.95;
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
    font-weight: 600;
    font-size: 12px;
  }

  .form-container .form-group input {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    color: ${({ theme }) => theme.text_primary};
    font-family: inherit;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.card_border};
    outline: none;
    font-size: 16px;
    transition: all 0.3s ease;
    min-height: 44px;
  }

  .form-container .form-group textarea {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    resize: none;
    color: ${({ theme }) => theme.text_primary};
    height: 96px;
    border: 1px solid ${({ theme }) => theme.card_border};
    background-color: transparent;
    font-family: inherit;
    outline: none;
    font-size: 16px;
    transition: all 0.3s ease;
  }

  .form-container .form-group input::placeholder {
    opacity: 0.5;
    color: ${({ theme }) => theme.text_secondary};
  }

  .form-container .form-group textarea::placeholder {
    opacity: 0.5;
    color: ${({ theme }) => theme.text_secondary};
  }

  .form-container .form-group input:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary_light};
  }

  .form-container .form-group textarea:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary_light};
  }

  .form-container .form-submit-btn {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    align-self: flex-start;
    font-family: inherit;
    color: ${({ theme }) => theme.text_secondary};
    font-weight: 600;
    width: 40%;
    background: ${({ theme }) => theme.card_light};
    border: 1px solid ${({ theme }) => theme.card_border};
    padding: 12px 16px;
    font-size: inherit;
    gap: 8px;
    margin-top: 8px;
    cursor: pointer;
    border-radius: 6px;
    transition: all 0.3s ease;
    min-height: 44px;
  }

  .form-container .form-submit-btn:hover {
    background-color: ${({ theme }) => theme.text_primary};
    border-color: ${({ theme }) => theme.text_primary};
    color: ${({ theme }) => theme.card};
  }
  
  @media (max-width: 480px) {
    .form-container {
      padding: 24px 20px;
    }
    
    .form-container .form-submit-btn {
      width: 50%;
    }
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
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
                <button type="submit" className="form-submit-btn">Submit</button>
              </form>
            </div>
          </StyledWrapper>
        </motion.div>

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
