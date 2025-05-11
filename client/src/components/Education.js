import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import { Design, Develope } from './AllSvgs';
import { FaSchool, FaGraduationCap, FaLaptopCode } from 'react-icons/fa';
import { MdDesignServices } from 'react-icons/md';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
  background: linear-gradient(135deg, ${props => props.theme.body} 0%, ${props => props.theme.gradient} 100%);
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 2rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path fill="${props => props.theme.text.replace('#', '%23')}" fill-opacity="0.03" d="M0,0 L100,0 L100,100 L0,100 Z"></path></svg>');
    background-size: 300px 300px;
    opacity: 0.5;
  }
`

const CardContainer = styled.div`
  display: flex;
  gap: 2rem;
  width: 85%;
  max-width: 1400px;
  height: 60vh;
  z-index: 2;
  perspective: 1000px;
`

const Main = styled.div`
  border: 1px solid rgba(${props => props.theme.textRgba}, 0.2);
  color: ${props => props.theme.text};
  background: rgba(${props => props.theme.bodyRgba}, 0.8);
  padding: 2rem;
  width: 100%;
  ${'' /* height: 100%; */}
  z-index: 3;
  line-height: 1.6;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  display: flex;
  flex-direction: column;
  ${'' /* overflow-y: auto; */}
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  transform-style: preserve-3d;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #FF6B6B, #4ECDC4, #45B7D1, #FF6B6B);
    background-size: 400% 400%;
    border-radius: 16px 16px 0 0;
    animation: gradient 8s ease infinite;
  }

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.text};
    border-radius: 4px;
  }

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    border-color: ${props => props.theme.primary};

    &::after {
      height: 6px;
    }
  }
`

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(${props => props.theme.textRgba}, 0.2);
  color: ${props => props.theme.primary};
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.3s ease;

  ${Main}:hover & {
    color: ${props => props.theme.text};
    border-bottom-color: ${props => props.theme.text};
  }

  svg {
    margin-right: 1rem;
    font-size: 1.5em;
    transition: all 0.3s ease;
  }
`

const Description = styled.div`
  color: ${props => props.theme.text};
  font-size: calc(0.6em + 0.5vw);
  padding: 0.5rem 0;
  margin-bottom: 1rem;
  transition: all 0.3s ease;

  ${Main}:hover & {
    color: ${props => props.theme.text};
  }

  strong {
    display: block;
    margin-bottom: 1rem;
    font-size: calc(0.7em + 0.5vw);
    color: ${props => props.theme.primary};
    font-weight: 600;
    letter-spacing: 0.5px;
    
    ${Main}:hover & {
      color: ${props => props.theme.text};
    }
  }
  
  ul {
    margin-left: 1rem;
    padding-left: 1rem;
  }
  
  li {
    margin-bottom: 0.3rem;
    position: relative;
    padding-left: 1.5rem;
    list-style-type: none;
    
    &::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: ${props => props.theme.primary};
      font-weight: bold;
    }
  }
`

const EducationItem = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(${props => props.theme.textRgba}, 0.05);
  border-radius: 12px;
  transition: all 0.3s ease;
  border-left: 3px solid ${props => props.theme.primary};

  ${Main}:hover & {
    background: rgba(${props => props.theme.textRgba}, 0.1);
    transform: translateX(5px);
  }
`

const Education = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme='light'/>
        <SocialIcons theme='light'/>
        <PowerButton />
        <ParticleComponent theme='light' />
        
        <CardContainer>
          <Main>
            <Title>
              <FaGraduationCap />
              Education
            </Title>
            <EducationItem>
              <Description>
                <strong>BTech in Computer Science</strong>
                <ul>
                  <li>Mahindra University</li>
                  <li>Aug 2021 - Present</li>
                  <li>Specialization in CSE</li>
                  <li>Presently in 8th Semester</li>
                </ul>
              </Description>
            </EducationItem>            
          </Main>
          
          <Main>
            <Title>
              <MdDesignServices />
              Intermediate
            </Title>
						<EducationItem>
              <Description>
                <strong>Intermediate</strong>
                <ul>
                  <li>Gowtham Junior College</li>
                  <li>Percentage: 95.6%</li>
                  <li>May 2019 - March 2021</li>
                </ul>
              </Description>
            </EducationItem>
          </Main>
          
          <Main>
            <Title>
              <FaLaptopCode />
              Development
            </Title>
            <EducationItem>
              <Description>
                <strong>Schooling</strong>
                <ul>
                  <li>DAV Public School</li>
                  <li>Percentage: 91.4%</li>
                  <li>April 2018 - March 2019</li>
                </ul>
              </Description>
            </EducationItem>
          </Main>
        </CardContainer>

        <BigTitle text="EDUCATION & SKILLS" top="90%" right="5%" />
      </Box>
    </ThemeProvider>
  )
}

export default Education