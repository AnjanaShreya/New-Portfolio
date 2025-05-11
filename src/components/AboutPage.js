import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';
import { FaDownload } from 'react-icons/fa';
import AnjanaShreya from "../assets/AnjanaShreya.pdf"

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/spaceman.png'

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`

const float = keyframes`
  0% { transform: translateY(-10px) }
  50% { transform: translateY(15px) translateX(15px) }
  100% { transform: translateY(-10px) }
`

const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  
  img {
    width: 100%;
    height: auto;
  }
`

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  padding: 2rem;
  width: min(90vw, 700px);
  height: auto;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  position: absolute;
  left: calc(5rem + 5vw);
  top: 7.5rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
  border-radius: 10px;
`

const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  padding: 0.8rem 1.5rem;
  margin-top: 2rem;
  border-radius: 50px;
  font-size: calc(0.6rem + 0.5vw);
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid ${props => props.theme.text};
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.body};
    transition: all 0.4s ease;
    z-index: -1;
  }
  
  &:hover {
    color: ${props => props.theme.text};
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    
    &::before {
      left: 0;
    }
  }
  
  svg {
    margin-right: 0.5rem;
    font-size: 1.2em;
  }
`

const AboutPage = () => {
    
    return (
      <ThemeProvider theme={DarkTheme}>
        <Box>
          <LogoComponent theme='dark'/>
          <SocialIcons theme='dark'/>
          <PowerButton />
          <ParticleComponent theme='dark' />

          <Spaceman>
            <img src={astronaut} alt="Floating astronaut illustration" />
          </Spaceman>    

          <Main>
            B.Tech Computer Science and Engineering student with a strong academic foundation and keen attention to detail, actively seeking an opportunity to bridge the gap between theoretical knowledge and real-world application. Eager to contribute to impactful projects while enhancing my technical skills in a collaborative and fast-paced environment. My goal is to gain hands-on experience, stay updated with cutting-edge technologies, and evolve into a well-rounded professional in the ever-evolving tech landscape.
            
            <ResumeButton href={AnjanaShreya} download="Anjana_Shreya.pdf">
              <FaDownload /> Download Resume
            </ResumeButton>
          </Main>

          <BigTitle text="ABOUT" top="10%" left="5%" />
        </Box>
      </ThemeProvider>
    )
}

export default AboutPage