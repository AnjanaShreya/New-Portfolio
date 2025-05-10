import React from 'react';
import styled from 'styled-components';
import { DarkTheme } from '../components/Themes';
import { useNavigate } from 'react-router-dom';

const Logo = styled.h1`
  display: inline-block;
  color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
  font-family: 'Pacifico', cursive;
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const LogoComponent = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Logo 
      color={props.theme} 
      onClick={handleClick}
      aria-label="Navigate to home"
    >
      AS
    </Logo>
  );
};

export default LogoComponent;