import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import { Design, Develope} from './AllSvgs';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height:100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
`

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  padding: 1.5rem;
  width: 30vw;
  height: 70vh;
  z-index:3;
  line-height: 1.3;
  cursor: pointer;
  font-family: 'Ubuntu Mono',monospace;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: ${props => props.theme.text} ${props => props.theme.body};

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${props => props.theme.body};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.text};
    border-radius: 3px;
  }

  &:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
    
    &::-webkit-scrollbar-track {
      background: ${props => props.theme.text};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.body};
    }
  }
`

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.8em + 1vw);
  margin-bottom: 0.8rem;

  ${Main}:hover &{
    &>*{
      fill:${props => props.theme.body};
    }
  }

  &>*:first-child{
    margin-right: 0.8rem;
  }
`

const Description = styled.div`
  color: ${props => props.theme.text};
  font-size: calc(0.5em + 0.8vw);
  padding: 0.3rem 0;
  margin-bottom: 0.5rem;

  ${Main}:hover &{
    color:${props => props.theme.body};
  }

  strong{
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    display: block;
    font-size: calc(0.5em + 0.8vw);
  }
  ul,p{
    margin-left: 1.5rem;
  }
  
  li {
    margin-bottom: 0.3rem;
  }
`

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme='light'/>
        <SocialIcons theme='light'/>
        <PowerButton />
        <ParticleComponent theme='light' />
        
        <Main>
          <Title>
            <Design width={30} height={30} /> Design & Tools
          </Title>
          <Description>
            <strong>Design Skills</strong>
            <ul>
              <li>UI/UX Design</li>
              <li>Web Design</li>
              <li>Mobile App Design</li>
              <li>Visual Communication</li>
            </ul>
          </Description>
          <Description>
            <strong>Design Tools</strong>
            <ul>
              <li>Figma</li>
              <li>Adobe Creative Suite</li>
              <li>Canva</li>
            </ul>
          </Description>
          <Description>
            <strong>Office Tools</strong>
            <ul>
              <li>Microsoft Office (Excel, Word, PowerPoint)</li>
              <li>Google Workspace</li>
            </ul>
          </Description>
        </Main>
        
        <Main>
          <Title>
            <Develope width={30} height={30} /> Development
          </Title>
          <Description>
            <strong>Programming Languages</strong>
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>Python</li>
              <li>Java (Novice)</li>
              <li>C</li>
            </ul>
          </Description>
          <Description>
            <strong>Web Development</strong>
            <ul>
              <li>HTML5, CSS3, Tailwind CSS</li>
              <li>ReactJS, NextJS, Redux</li>
              <li>NodeJS, Express</li>
              <li>Firebase, AWS (DynamoDB, Lambda)</li>
            </ul>
          </Description>
          <Description>
            <strong>Databases & Tools</strong>
            <ul>
              <li>MySQL, Oracle 19c</li>
              <li>MongoDB (NoSQL)</li>
              <li>GitHub, VS Code</li>
              <li>Machine Learning Basics</li>
            </ul>
          </Description>
        </Main>

        <BigTitle text="SKILLS" top="85%" right="30%" />
      </Box>
    </ThemeProvider>
  )
}

export default MySkillsPage