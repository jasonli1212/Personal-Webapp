import React, { Suspense } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { TypeAnimation } from "react-type-animation";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Section = styled.div`
  padding-top: 3%;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 100hv;
  }
`;

const Container = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
    height: 30%;
  }
`;

const Title = styled.h1`
  font-size: calc(12px + 2.8vw);;
  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 5vw;
  }
`;

const Subtitle = styled.h2`
  font-size: calc(12px + 1.8vw);;
  font-weight: 600;
  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 5vw;
  }
`;

const WhatWeDo = styled.div`
  font-size: calc(12px + 0.9vw);;
  display: flex;
  align-items: center;
  gap: 10px;
  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 5vw;
  }
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 2;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 30vw;
  height: 20vw;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 50vw;
    height: 50vw;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Header = ({resumeData}) => {
  console.lonm
  return (
    <Section id="home">
      <Container>
        <Left>
          <Title>Hello There ✋</Title>
            <Subtitle>I am {" "}
                <span style={{ color: "#7f58b8" }}>{resumeData.name}</span>
                ,
            </Subtitle>
            <WhatWeDo>
                <span>a </span>
                <TypeAnimation
                    sequence={resumeData.role}
                    repeat={Infinity}
                />
            </WhatWeDo>
        </Left>
        <Right>
          <Img src="./img/header.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Header;