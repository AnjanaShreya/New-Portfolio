import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import img from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg";
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import AnchorComponent from '../subComponents/Anchor';
// import BigTitle from "../subComponents/BigTitle";

// Sample certificate images
import Certificate1 from '../assets/Images/cert1.png';
import Certificate2 from '../assets/Images/cert2.png';
import Certificate3 from '../assets/Images/cert3.png';

// Background animation
const float = keyframes`
  0% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(50px, 50px) rotate(180deg); }
  100% { transform: translate(0, 0) rotate(360deg); }
`;

const floatReverse = keyframes`
  0% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(-50px, -50px) rotate(-180deg); }
  100% { transform: translate(0, 0) rotate(-360deg); }
`;

const MainContainer = styled(motion.div)`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
  width: 100%;
  height: 100vh;
  position: relative;
  padding-bottom: 5rem;
`;

const FloatingShape = styled.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  animation: ${float} 15s infinite linear;
  
  &:nth-child(1) {
    width: 300px;
    height: 300px;
    top: 10%;
    left: 5%;
    animation: ${floatReverse} 20s infinite linear;
  }
  
  &:nth-child(2) {
    width: 200px;
    height: 200px;
    bottom: 15%;
    right: 10%;
    animation: ${float} 25s infinite linear;
  }
  
  &:nth-child(3) {
    width: 150px;
    height: 150px;
    top: 60%;
    left: 20%;
  }
`;

const Title = styled(motion.h1)`
  font-size: 5rem; /* Increased size */
  text-align: center;
  margin-bottom: 3rem;
  padding-top: 6.5rem;
  padding-left: 10rem;
  color: rgba(0, 0, 0, 0.6); /* Black with lower opacity */
  font-weight: 700;
  position: relative;
  z-index: 2;
`;


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  padding: 0 2rem;
`;

const CertificateCard = styled(motion.div)`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
  aspect-ratio: 1.414 / 1;
  background: rgba(15, 15, 15, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.8);
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

const CertificateImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${CertificateCard}:hover & {
    transform: scale(1.05);
  }
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
  padding: 1.5rem;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${CertificateCard}:hover & {
    opacity: 1;
  }
`;

const CertificateTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #fff;
`;

const CertificateIssuer = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
`;

// Certificate data
const certificates = [
  {
    id: 1,
    title: "Full Stack Web Development",
    issuer: "Coding Academy",
    image: Certificate1
  },
  {
    id: 2,
    title: "React Specialist",
    issuer: "Frontend Masters",
    image: Certificate2
  },
  {
    id: 3,
    title: "Advanced JavaScript",
    issuer: "Udemy",
    image: Certificate3
  }
];

// Animation config
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    }
  }
};

const Item = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: { type: "spring", duration: 0.5 },
  },
};

const Certificates = () => {
  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 70)/30;
    setNumbers(parseInt(num));
  }, []);

  return (
    <MainContainer
      variants={container}
      initial='hidden'
      animate='show'
      exit={{
        opacity: 0, 
        transition: { duration: 0.5 }
      }}
    >
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIcons />
        <AnchorComponent number={numbers}/>
        
        {/* Floating background elements */}
        <FloatingShape />
        <FloatingShape />
        <FloatingShape />
        
        <Title
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Certifications
        </Title>
        
        <Grid>
          {certificates.map((cert) => (
            <CertificateCard
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              <CertificateImage 
                src={cert.image} 
                alt={`${cert.title} certificate`} 
              />
              <Overlay>
                <CertificateTitle>{cert.title}</CertificateTitle>
                <CertificateIssuer>{cert.issuer}</CertificateIssuer>
              </Overlay>
            </CertificateCard>
          ))}
        </Grid>
        
        {/* <BigTitle text="CERTIFICATES" top="5rem" left="5rem" /> */}
      </Container>
    </MainContainer>
  );
};

export default Certificates;