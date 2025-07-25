import React from 'react'
import { useRef, useEffect } from 'react';
import styled,{keyframes} from "styled-components";
import {motion, AnimatePresence} from 'framer-motion'
import { useState } from 'react';

import { IoIosArrowDropright } from "react-icons/io";
import { AiOutlineClose, AiOutlineLink, AiFillGithub } from "react-icons/ai";

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Section = styled.div`
  padding-top: 3%;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-height:300px) {
    height: 80%;
    margin-bottom: 40px
  }
`;

const Title = styled.div`
  overflow: warp;
  width: 100%;
  height: 15%;
  display: flex;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const ClickContainer = styled.div`
  margin-left: 20%;
  display: flex;
  height: 100%;
  width: fit-content;
  flex-direction: column;
  font-weight: bolder;
  cursor: pointer;
  position: relative;
  font-size: calc(1.5rem + 1vw);
  @media only screen and (max-width: 768px) {
    margin-left: 0
  }
`;

const Work = styled(motion.div)`
  animation: ${props => props.active ? fadeOutWork : fadeInWork} 1s linear;
  z-index: ${props => props.active ? 1 : 0};
  color: ${props => props.active ? 'black' : 'transparent'};
  -webkit-text-stroke: ${props => props.active ? 'black' : '1px white'};
  position: relative;
  text-shadow: 3px -3px 4px;
`;

const Photos = styled(motion.div)`
  animation: ${props => props.active ? fadeInPhoto : fadeOutPhoto} 1s linear;
  z-index: ${props => props.active ? 0 : 1};
  color: ${props => props.active ? 'transparent' : 'black'};
  -webkit-text-stroke: ${props => props.active ? '1px white' : 'black'};
  left: 20px;
  top: -10px;
  position: absolute;
  text-shadow: 3px -3px 4px;
`;

const fadeInWork = keyframes`
  from {
    z-index: 1;
    color: black;
    -webkit-text-stroke: black;
  }

  to {
    z-index: 0;
    color: transparent;
    -webkit-text-stroke: 1px white;
  }
`;

const fadeOutWork = keyframes`
  from {
    z-index: 0;
    color: transparent;
  }
  
  to {
    z-index: 1;
    color: black;
  }
`;

const fadeInPhoto = keyframes`
  from {
    z-index: 1;
    color: black;
    -webkit-text-stroke: black;
  }

  to {
    z-index: 0;
    color: transparent;
    -webkit-text-stroke: 1px white;
  }
`;

const fadeOutPhoto = keyframes`
  from {
    z-index: 0;
    color: transparent;
    -webkit-text-stroke: 1px white;
  }
  
  to {
    z-index: 1;
    color: black;
    -webkit-text-stroke: black;
  }
`;

const wrapperVariants = {
  initial: {
    clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)', 
    transition: { duration: .4 }
  },
  animate: {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    transition: { duration: .4, staggerChildren: .1 }
  },
  exit: {
    clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
    transition: { duration: .4 }
  }
}

const ForMore = styled(motion.div)`
  z-index: 10;
  fill: rbga(150,150,150,0.6);
  :hover {
    fill: gray;
    cursor: pointer;
  }
`;

const Content = styled(motion.div)`
  display: flex;
  margin-bottom: 3%;
  height: 100%;
  width: 80%;
  position: relative;
`;

const SquareContainer = styled(motion.div)`
  background-image:linear-gradient(to bottom right, rgba(255,255,255,0.3), rgba(255,255,255,0.2));
  box-shadow: 0px 0px 2px rgba(30,30,30,0.5);
  border-radius: 15px;
  display: flex;
  overflow-x: hidden;
`;

const Square = styled(motion.div)`
  z-index: 99;
  background-image:linear-gradient(to bottom right, rgba(255,255,255,0.3), rgba(255,255,255,0.2));
  box-shadow: 0px 0px 4px rgba(30,30,30,0.5);
  margin: 10px;
  width: 30rem;
  border-radius: 15px;
  height: 90%;
  transition: all .2s;
  display: flex;
  // justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  @media only screen and (max-width: 720px) {
    min-height: 80%;
    max-width: 15rem;
  }
  
  @media only screen and (max-height:300px) {
    flex-direction: row;
    min-width: 470px;
  }
`;

const ProjectImgWrapper = styled.div`
  position: relative;
  margin: 5%;
  height: 20rem;
  width: 20rem;
  background-image: linear-gradient(to bottom right, rgba(255,255,255,0.3), rgba(255,255,255,0.2));
  box-shadow: 0px 0px 4px rgba(30,30,30,0.5);
  border-radius: 15px;
  overflow: hidden;

  @media only screen and (max-width: 720px) {
    max-width: 10rem;
    max-height: 10rem;
  }

  @media only screen and (max-height:300px) {
    // height: 80%;
  }
`;

const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProjectDescription = styled.div`
  border-radius: 15px;
  // background-image:linear-gradient(to bottom right, rgba(255,255,255,0.3), rgba(255,255,255,0.2));
  // box-shadow: 0px 0px 4px rgba(30,30,30,0.5);
  width: 90%;
  height: ;
`;

const ProjectTitle = styled.h1`
  text-align: center;

  font-size: 1.6rem;
`;

const DragScroll = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: grab;
`;

const CardWarpper = styled(motion.div)`
  border-radius: 15px;
  box-shadow: 0px 0px 0px rgba(30,30,30,0.5);
  background-image:linear-gradient(to bottom right, rgba(255,255,255,0.3), rgba(255,255,255,0.2));
  position: relative;
  overflow: visible;


  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

`;

const CardHeader = styled.div`
  height: min-content;
  display: flex;
  margin: 10px 30px;
  position: relative;

  @media only screen and (max-width: 768px) {
    margin: 10px;
    align-items: flex-start;
  }

  h2 {
    height: min-content;
    font-size: calc(1.5rem + 1vw);
    font-weight: 600;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    align-self: center;
    justify-self: center;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    width: 32px;
    height: 32px;
  }

  :focus {
    outline: none;
  }
`;

const CardContent = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const CardLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 2;
  border-radius: 15px;
  box-shadow: 0px 0px 4px rgba(30,30,30,0.5);
  margin: 10px;
  padding: 2%;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 15px;
    background-image: linear-gradient(to bottom right, rgba(255,255,255,0.3), rgba(255,255,255,0.2));
    pointer-events: none;
  }

  @media only screen and (max-width: 768px) {
    width: 80%;
  }
`;

const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  margin: 10px;
  overflow: wrap;
`;

const Description = styled.div`
  font-size: calc(0.5rem + 0.5vw);

  ul {
    padding: 10px;
    margin: 0;
    li {
      margin: 10px 0;
    }
  }
`;

const DescriptionLink = styled.div`
  margin-top:20px;
  a {
    padding-top: 10px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    margin: 5px;
    border-radius: 15px;
    background-image:linear-gradient(to bottom right, rgba(255,255,255,0.3), rgba(255,255,255,0.2));
    box-shadow: 0px 0px 2px rgba(30,30,30,0.5);
    color: black;
  }
  :hover {
    color: gray;
  }
`;



const Projects = ({resumeData}) => {

  const [active, setActive] = useState(true);
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [width, setWidth] = useState(100);
  const carousel = useRef();
  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, [selectedSquare]);

  const renderSquares = () => {
    const projects = resumeData.projects;
    return projects.map((project, i) => (
      <Square
        key={i}
        transition={{ duration: .2, type: 'spring' }}
        zIndex={2}
      >
        <ProjectImgWrapper>
          <ProjectImg src={project.thumbnail} draggable="false" />
        </ProjectImgWrapper>
        <ProjectDescription>
          <ProjectTitle>{project.name}</ProjectTitle>
          <br/>
          <p>
            {project.shortDescription}
          </p>
        </ProjectDescription>
        <ForMore>
          <IoIosArrowDropright 
          fontSize={"4em"}
          color={"rgba(150,150,150,0.6)"}
          onClick={() => setSelectedSquare(project)}
          style={
            { bottom: '0', position: 'absolute', right: '0', margin: '10px'  }
          }
          />
        </ForMore>
      </Square>
    ));
  }

  return (
    <Section id='projects'>

      <Title>
        <ClickContainer onClick={() => setActive(!active)}>
          <Work
          active = {active}
          initial={{ x: 0, y: 0 }}
          animate={{
            x: active ? 0 : '20px',
            y: active ? 0 : '-10px',
          }}
          transition={{ duration: 1 }}>
            WORKS
          </Work>
          <Photos
            active = {active}
            initial={{ x: 0, y: 0 }}
            animate={{
              x: active ? 0 : '-20px',
              y: active ? 0 : '10px',
            }}
            transition={{ duration: 1 }}
          >
          PHOTOS
          </Photos>
        </ClickContainer>
      </Title>
      
      { active ?
        (<Content>
          <AnimatePresence mode='wait' initial={false}>
            {selectedSquare 
            ? (
              <CardWarpper
                key="card"
                variants={wrapperVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: .4 }}
              >
                <CardHeader>
                  <h2>{selectedSquare.name}</h2>
                  <button onClick={() => setSelectedSquare(null)}>
                    <ForMore>
                      <AiOutlineClose size={32} />
                    </ForMore>
                  </button>
                </CardHeader>
                <CardContent>
                  <CardLeft>
                      <AwesomeSlider
                        animation="foldOutAnimation"
                        bullets={true}
                        style={{width: '100%', height: '70%'}}
                      > 
                        {selectedSquare.imgs.map(img => <div key={img.src} data-src={img.src} draggable='false'/>)}
                      </AwesomeSlider>
                  </CardLeft>
                  <CardRight>
                    <h3>
                      {selectedSquare.date}
                    </h3>
                    <Description>
                    
                      <ul>
                        {selectedSquare.fullDescription.map(dis => <li key={dis}>{dis}</li>)}
                      </ul>

                    {
                      selectedSquare.skills ?
                        <> 
                          <span style={{fontWeight: 'bold'}}>Skills: </span>
                          {selectedSquare.skills.map((skill, index) => (
                            <span key={skill}>
                              {skill}
                              {index !== selectedSquare.skills.length - 1 ? ", " : ""}
                            </span>
                          ))}
                        </>
                      :
                      null
                    }
                    </Description>
                  <DescriptionLink>
                    <p>
                    {
                      selectedSquare.url ?
                      <a href = {selectedSquare.url}>
                        <AiOutlineLink/>
                      </a>
                      :
                      null
                    }
                    {
                      selectedSquare.github ?
                      <a href = {selectedSquare.github}>
                        <AiFillGithub/>
                      </a>
                      :
                      null
                    }
                    </p>
                  </DescriptionLink>
                  </CardRight>
                </CardContent>
              </CardWarpper>
            )
            : 
              <SquareContainer
                key="squares"
                variants={wrapperVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                ref={carousel}
              >
                <DragScroll
                drag="x"
                dragConstraints = {{right: 0, left: -width }}
                zIndex={3}
                whileTap={{ cursor: 'grabbing' }}
                >
                {
                renderSquares()
                }
                </DragScroll>
              </SquareContainer>
              
            }
          </AnimatePresence>
        </Content>)
      :
      <Content><h1>🚧 Under Construction 🚧</h1></Content>
      }
      {/* Photos Section */}

    </Section>
  )
}

export default Projects
