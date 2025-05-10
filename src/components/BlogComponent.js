import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Code, Globe } from "react-feather";

const Container = styled(motion.div)`
  width: calc(10rem + 15vw);
  height: 28rem; /* Increased height for better spacing */
  padding: 1.2rem;
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.text};
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  z-index: 5;
  border-radius: 8px; /* Added subtle rounding */
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 45%; /* Slightly larger image area */
  background-size: cover;
  border: 1px solid transparent;
  background-position: center center;
  margin-bottom: 0.8rem;
  border-radius: 4px; /* Rounded corners for image */
`;

const Title = styled.h3`
  color: ${(props) => props.theme.text};
  padding: 0.3rem 0;
  margin: 0.2rem 0;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  font-size: 1.1rem; /* Slightly larger title */
  border-bottom: 1px solid ${(props) => props.theme.text};
`;

const Description = styled.p`
  font-size: 0.90rem; /* Adjusted for readability */
  line-height: 1.5; /* Better line spacing */
  padding: 0.6rem 0;
  margin: 0.2rem 0;
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* Show more lines */
  -webkit-box-orient: vertical;
  color: ${(props) => props.theme.text}cc; /* Slightly transparent */
`;

const HashTags = styled.div`
  padding: 0.4rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem; /* Better spacing between tags */
  margin: 0.2rem 0;
`;

const Tag = styled.span`
  padding: 0.2rem 0.5rem;
  font-size: 0.65rem;
  background-color: ${(props) => props.theme.text}22; /* Subtle background */
  border-radius: 12px;
  color: ${(props) => props.theme.text};
`;

const Date = styled.span`
  padding: 0.4rem 0;
  font-size: 0.90rem;
  color: ${(props) => props.theme.text}aa; /* Lighter color for date */
  margin: 0.2rem 0;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.8rem;
  gap: 0.8rem; /* Space between buttons */
`;

const LinkButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.4rem 1rem;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  text-decoration: none;
  border-radius: 6px;
  font-size: 0.85rem;
  transition: all 0.3s ease;
  flex: 1; /* Equal width buttons */
  border: 1px solid transparent;

  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.text};
    transform: translateY(-2px); /* Subtle lift effect */
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;

const Item = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: { type: "spring", duration: 0.5 },
  },
};

const BlogComponent = (props) => {
  const { name, tags, date, imgSrc, link, description, github } = props.blog;
  
  return (
    <Container variants={Item}>
      <Image img={imgSrc} />
      <Title>{name}</Title>
      <Description>{description}</Description>
      <HashTags>
        {tags.map((t, id) => (
          <Tag key={id}>{t}</Tag> /* Removed # for cleaner look */
        ))}
      </HashTags>
      <Date>{date}</Date>
      <LinksContainer>
        {github && (
          <LinkButton href={github} target="_blank" rel="noopener noreferrer">
            <Code size={14} /> Source
          </LinkButton>
        )}
        {link && (
          <LinkButton href={link} target="_blank" rel="noopener noreferrer">
            <Globe size={14} /> Demo
          </LinkButton>
        )}
      </LinksContainer>
    </Container>
  );
};

export default BlogComponent;