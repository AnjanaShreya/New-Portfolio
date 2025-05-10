import React, { useEffect, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import { motion } from "framer-motion";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";

import { Work } from "../data/WorkData";
import Card from "../subComponents/Card";
import { YinYang } from "./AllSvgs";
import BigTitlte from "../subComponents/BigTitlte";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height: ${props => props.height}px;
  position: relative;
  display: flex;
  align-items: center;
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const WorkPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);

  // Calculate required height based on number of cards
  useEffect(() => {
    // Each card takes about 100vh of scroll space (adjust as needed)
    const cardHeight = window.innerHeight * 1.2; // 1.2vh per card
    const totalHeight = Work.length * cardHeight;
    setContainerHeight(totalHeight);
    
    // Adjust scroll sensitivity
    const scrollFactor = 0.5; // Lower value makes scrolling slower
    
    const handleScroll = () => {
      if (ref.current) {
        ref.current.style.transform = `translateX(${-window.pageYOffset * scrollFactor}px)`;
      }
      if (yinyang.current) {
        yinyang.current.style.transform = `rotate(${-window.pageYOffset * scrollFactor}deg)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [Work.length]);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box height={containerHeight}>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />

        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {Work.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>
        
        <Rotate ref={yinyang}>
          <YinYang width={80} height={80} fill={DarkTheme.text} />
        </Rotate>

        <BigTitlte text="WORK" top="10%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;