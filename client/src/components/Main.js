import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import { YinYang } from './AllSvgs'
import Intro from './Intro'
import { FaDownload } from 'react-icons/fa'
import AnjanaShreya from "../assets/AnjanaShreya.pdf"

const MainContainer = styled.div`
  background: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2,h3,h4,h5,h6 {
    font-family: 'Karla', sans-serif;
    font-weight: 500;
  }
`

const Container = styled.div`
  padding: 2rem;
`

const DownloadResume = styled.a`
  color: ${props => props.click ? props.theme.body : props.theme.text};
  position: absolute;
  top: 2rem;
  left: calc(11rem + 2vw);
  text-decoration: none;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Karla', sans-serif;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border: 2px solid ${props => props.click ? props.theme.body : props.theme.text};
  border-radius: 50px;
  transition: all 0.3s ease;
  background-color: ${props => props.click ? props.theme.text : `rgba(${props.theme.textRgba}, 0.1)`};

  &:hover {
    background-color: ${props => props.click ? props.theme.body : props.theme.text};
    color: ${props => props.click ? props.theme.text : props.theme.body};
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  svg {
    font-size: 1rem;
  }
`

const CONTACT = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`

const PROJECTS = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top: 40%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`

const CERTIFICATES = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top: 75%;
  right: calc(1rem + 1vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`

const WORK = styled(NavLink)`
  color: ${props => props.click ? props.theme.body : props.theme.text};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;
`

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`

const ABOUT = styled(NavLink)`
  color: ${props => props.click ? props.theme.body : props.theme.text};
  text-decoration: none;
  z-index: 1;
  transform: translateX(90px); 
`

const SKILLS = styled(NavLink)`
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 1;
  margin: 0 1rem; /* ← Add this */
  transform: translateY(-10px); 
  transform: translateX(80px); 
`

const EDUCATION = styled(NavLink)`
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 1;
`

const rotate = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`

const Center = styled.button`
  position: absolute;
  top: ${props => props.click ? '85%' : '50%'};
  left: ${props => props.click ? '92%' : '50%'};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  &>:first-child {
    animation: ${rotate} infinite 1s linear;
  }

  &>:last-child {
    display: ${props => props.click ? 'none' : 'inline-block'};
    padding-top: 1rem;
  }
`

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #000;
  bottom: 0;
  right: 50%;
  width: ${props => props.click ? '50%' : '0%'};
  height: ${props => props.click ? '100%' : '0%'};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`

const Main = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <MainContainer>
      <DarkDiv click={click}/>
      <Container>
        <DownloadResume 
          href={AnjanaShreya} 
          download="AnjanaShreya.pdf"
          click={+click}
          initial={{ x: -340 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', duration: 1.5, delay: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          as={motion.a}
        >
          <FaDownload /> Resume
        </DownloadResume>

        <PowerButton />
        <LogoComponent theme={click ? 'dark' : 'light'}/>
        <SocialIcons theme={click ? 'dark' : 'light'} />
        
        <Center click={click}>
          <YinYang onClick={() => handleClick()} width={click ? 120 : 200} height={click ? 120 : 200} fill='currentColor' />
          <span>click here</span>
        </Center>

        <CONTACT to="/contactme" click={+click}>
          <motion.h2
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', duration: 1, delay: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Contact Me
          </motion.h2>
        </CONTACT>

        <PROJECTS to="/blog">
          <motion.h2
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', duration: 1, delay: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Projects
          </motion.h2>
        </PROJECTS>

        <CERTIFICATES to="/certificates">
          <motion.h2
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', duration: 1, delay: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Certificates
          </motion.h2>
        </CERTIFICATES>

        <WORK to="/work" click={+click}>
          <motion.h2
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', duration: 1, delay: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Internships
          </motion.h2>
        </WORK>

        <BottomBar>
          <ABOUT to="/about" click={+click}>
            <motion.h2
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{ type: 'spring', duration: 1, delay: 0.8 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              About.
            </motion.h2>
          </ABOUT>

          <SKILLS to="/skills">
            <motion.h2
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{ type: 'spring', duration: 1, delay: 0.8 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              My Skills.
            </motion.h2>
          </SKILLS>

          <EDUCATION to="/education">
            <motion.h2
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{ type: 'spring', duration: 1, delay: 0.8 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Education
            </motion.h2>
          </EDUCATION>
        </BottomBar>
      </Container>
      {click ? <Intro click={click} /> : null}
    </MainContainer>
  )
}

export default Main