import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { Github } from '../components/AllSvgs';
import { ExternalLink } from 'react-feather';

const Box = styled(motion.li)`
  width: 20rem;
  height: 47vh;
  background: linear-gradient(145deg, ${props => props.theme.text} 0%, ${props => props.theme.text}90 100%);
  color: ${props => props.theme.body};
  padding: 1.9rem;
  margin-right: 6rem;
  border-radius: 0 40px 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid ${props => props.theme.body};
  box-shadow: 0 15px 30px rgba(0,0,0,0.12);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:hover {
    background: linear-gradient(145deg, ${props => props.theme.body} 0%, ${props => props.theme.body}90 100%);
    color: ${props => props.theme.text};
    border: 2px solid ${props => props.theme.text};
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg, 
      rgba(255,255,255,0.15) 0%, 
      transparent 70%
    );
    pointer-events: none;
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background: radial-gradient(
      circle at center,
      ${props => props.theme.body}20 0%,
      transparent 70%
    );
    transition: all 0.4s ease;
    z-index: -1;
  }

  &:hover::after {
    transform: scale(1.5);
    opacity: 0.3;
  }
`;

const Company = styled.h2`
  font-size: calc(1.6em);
  font-weight: 700;
  margin-bottom: 0.4rem;
  position: relative;
  display: inline-block;
  background: linear-gradient(90deg, ${props => props.theme.body}, ${props => props.theme.body}80);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.4s ease;

  ${Box}:hover & {
    background: linear-gradient(90deg, ${props => props.theme.text}, ${props => props.theme.text}80);
    -webkit-background-clip: text;
    background-clip: text;
  }
`;

const Role = styled.h3`
  font-size: calc(1.1em + 0.3vw);
  font-weight: 600;
  color: ${props => props.theme.body};
  margin-bottom: 0.4rem;
  opacity: 0.9;

  ${Box}:hover & {
    color: ${props => props.theme.text};
  }
`;

const Period = styled.div`
  font-size: calc(0.8em + 0.2vw);
  color: ${props => props.theme.body};
  opacity: 0.8;
  margin-bottom: 0.7rem;
  font-style: italic;

  ${Box}:hover & {
    color: ${props => props.theme.text};
  }
`;

const Description = styled.div`
  font-size: calc(0.9em );
  font-family: 'Karla', sans-serif;
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 1.2rem;
  flex-grow: 1;  
  overflow-y: auto;  
  position: relative;
  padding-left: 1rem;
  padding-right: 0.5rem;  

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.body}50;
    border-radius: 10px;
  }
  ${Box}:hover &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.text}50;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 3px;
    background: ${props => props.theme.body};
    border-radius: 3px;
    transition: all 0.4s ease;
  }

  ${Box}:hover &::before {
    background: ${props => props.theme.text};
  }
`;


const Tags = styled.div`
  border-top: 2px dashed ${props => props.theme.body}50;
  padding-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1rem;

  ${Box}:hover & {
    border-top: 2px dashed ${props => props.theme.text}50;
  }
`;

const Tag = styled(motion.span)`
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-size: calc(0.75em + 0.2vw);
  font-weight: 500;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: all 0.3s ease;

  ${Box}:hover & {
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

const Link = styled(motion.a).attrs(() => ({
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
}))`
  background: linear-gradient(90deg, ${props => props.theme.body}, ${props => props.theme.body}80);
  color: ${props => props.theme.text};
  text-decoration: none;
  padding: 0.7rem 1.8rem;
  border-radius: 50px;
  font-size: calc(0.95em + 0.3vw);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  transition: all 0.4s ease;
  box-shadow: 0 4px 15px ${props => props.theme.body}20;

  svg {
    transition: all 0.3s ease;
  }

  ${Box}:hover & {
    background: linear-gradient(90deg, ${props => props.theme.text}, ${props => props.theme.text}80);
    color: ${props => props.theme.body};
    box-shadow: 0 6px 20px ${props => props.theme.text}30;
  }

  &:hover {
    transform: translateY(-2px);
    svg {
      transform: translateX(3px);
    }
  }
`;

const Git = styled(motion.a).attrs(() => ({
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.9 }
}))`
  color: ${props => props.theme.body};
  text-decoration: none;
  transition: all 0.4s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: ${props => props.theme.text}20;
  backdrop-filter: blur(5px);

  ${Box}:hover & {
    color: ${props => props.theme.text};
    background: ${props => props.theme.body}20;
    
    & > * {
      fill: ${props => props.theme.text};
    }
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
`;

const Item = {
  hidden: {
    scale: 0.8,
    opacity: 0,
    y: 50
  },
  show: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 0.6,
      damping: 10,
      stiffness: 100
    }
  }
};

const tagItem = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 }
};

const Card = (props) => {
  const { id, company, role, period, description, tags, demo, github } = props.data;

  return (
    <Box key={id} variants={Item}>
      <div>
        <Company>{company}</Company>
        <Role>{role}</Role>
        <Period>{period}</Period>
        <Description>
          {description}
        </Description>
      </div>
      <div>
        <Tags>
          {tags.map((t, id) => (
            <Tag 
              key={id}
              variants={tagItem}
              transition={{ duration: 0.2, delay: id * 0.1 }}
            >
              {t}
            </Tag>
          ))}
        </Tags>
        <Footer>
          {demo && (
            <Link 
              href={demo} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover="whileHover"
              whileTap="whileTap"
            >
              <ExternalLink size={18} />
              Visit
            </Link>
          )}
          {github && (
            <Git 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover="whileHover"
              whileTap="whileTap"
            >
              <Github width={22} height={22} />
            </Git>
          )}
        </Footer>
      </div>
    </Box>
  );
};

export default Card;