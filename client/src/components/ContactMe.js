import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { DarkTheme } from './Themes';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';

const Box = styled.div`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  width: 100vw;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem;
    align-items: flex-start;
  }
`;

const ContactContainer = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 80%;
  max-width: 1000px;
  min-height: 70vh;
  z-index: 3;
  line-height: 1.5;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  backdrop-filter: blur(8px);
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 95%;
    padding: 1.5rem;
    margin-top: 4rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContactHeader = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.text};
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50%;
    height: 3px;
    background: ${(props) => props.theme.primary};
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContactSubheader = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.8;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  font-size: 1.1rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(10px);
  }

  svg {
    margin-right: 1rem;
    font-size: 1.5rem;
    color: ${(props) => props.theme.primary};
    min-width: 30px;
  }

  a, span {
    color: ${(props) => props.theme.text};
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: ${(props) => props.theme.primary};
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Input = styled.input`
  padding: 0.8rem;
  margin-bottom: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  border-radius: 5px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.primary};
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  margin-bottom: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  border-radius: 5px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.primary};
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const SubmitButton = styled.button`
  padding: 0.8rem;
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.body};
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const StatusMessage = styled.div`
  margin-top: 1rem;
  padding: 0.8rem;
  border-radius: 5px;
  background: ${props => props.error ? 'rgba(255, 0, 0, 0.2)' : 'rgba(0, 255, 0, 0.2)'};
  color: ${props => props.error ? '#ff6b6b' : '#51cf66'};
  text-align: center;
  font-size: 0.9rem;
`;

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    message: '',
    error: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, message: 'Sending...', error: false });
  
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }
  
      setStatus({ 
        submitting: false, 
        message: data.message || 'Message sent successfully!', 
        error: false 
      });
      setFormData({ name: '', email: '', message: '' });
      
    } catch (error) {
      console.error('Full error:', error);
      setStatus({ 
        submitting: false, 
        message: error.message || 'Failed to send message. Please try again later.', 
        error: true 
      });
    } finally {
      setTimeout(() => {
        setStatus(prev => ({ ...prev, message: '' }));
      }, 5000);
    }
  };
  
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme='dark'/>
        <SocialIcons theme='dark'/>
        <PowerButton />
        <ParticleComponent theme='dark' />

        <ContactContainer>
          <ContactInfo>
            <ContactHeader>Let's Connect</ContactHeader>
            <ContactSubheader>
              Feel free to reach out for collaborations or just a friendly hello
            </ContactSubheader>
            
            <ContactItem>
              <MdEmail />
              <a href="mailto:chitturianjana@gmail.com">chitturianjana@gmail.com</a>
            </ContactItem>
            
            <ContactItem>
              <MdLocationOn />
              <span>Hyderabad, India</span>
            </ContactItem>
            
            <ContactItem>
              <FaLinkedin />
              <a href="https://www.linkedin.com/in/ch-s-anjana-shreya-68a74628a" 
                 target="_blank" 
                 rel="noopener noreferrer">
                LinkedIn - Anjana Shreya
              </a>
            </ContactItem>
          </ContactInfo>

          <ContactForm onSubmit={handleSubmit}>
            <Input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input 
              type="email" 
              name="email"
              placeholder="Your Email" 
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextArea 
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <SubmitButton type="submit" disabled={status.submitting}>
              {status.submitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
            {status.message && (
              <StatusMessage error={status.error}>
                {status.message}
              </StatusMessage>
            )}
          </ContactForm>
        </ContactContainer>

        <BigTitle text="CONTACT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
}

export default ContactMe;