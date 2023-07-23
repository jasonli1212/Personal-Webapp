import React, { useRef, useState } from 'react'
import styled from "styled-components";
import emailjs from '@emailjs/browser';
import * as THREE from 'three';

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Cat from './Cat.jsx';
import { Stage } from '@react-three/drei';

const Section = styled.div`
  padding-top: 3%;
  height: 95%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  display: flex;
  width: 40%;
  padding-left: 5%;
  margin: 5%;
  border-radius: 10px;
  z-index: 1;
  @media only screen and (max-width: 768px) {
    width: 50%;
    padding-left: 0%;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 5% 3%;
`;

const Input = styled.input`
  padding: 1%;
  margin: 5px 0;
  border-radius: 10px;
  width: 98%;
  border: none;
  height: 40px;
  background-color:rgba(255,255,255,0.5);
  -webkit-backdrop-filter: blur(3px);
  box-shadow: 0px 0px 4px rgba(30,30,30,0.5);
  font-size: 1.2rem;
  
`;

const TextArea = styled.textarea`
  padding: 1%;
  margin: 5px 0;
  -webkit-backdrop-filter: blur(3px);
  box-shadow: 0px 0px 4px rgba(30,30,30,0.5);
  border-radius: 10px;
  width: 98%;
  height: 30%;
  border: none;
  background-color:rgba(255,255,255,0.5);
  font-size: 1.2rem;
  resize: none;
`;

const Button = styled.button`
  padding: 1%;
  margin: 5px 0;
  border-radius: 10px;
  width: 100%;
  border: none;
  height: 40px;
  background-color:rgba(255,255,255,0.5);
  -webkit-backdrop-filter: blur(3px);
  box-shadow: 0px 0px 4px rgba(30,30,30,0.5);
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    background-color:rgba(255,255,255,0.7);
  }
`;

const Right = styled.div`
  z-index: 0;
  width: 50%;
  height: 80%;
  margin: 5%;
  right: -3%;
  position: absolute;
  @media only screen and (max-width: 768px) {
    margin: auto;
    right: 0;
    left: 0;
    top: 350px;
    width: 60%;
  }
  @media only screen and (max-height:300px) {

  }
  
`;

const Contact = () => {

  const form = useRef();
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qtpwejs', 'template_gmdwsnl', form.current, 'oz0MLw64K_WX8DIT_')
      .then((result) => {
          console.log(result.text);
          setSuccess(true);
      }, (error) => {
          console.log(error.text);
          setSuccess(false);
      });
  };

  return (
    <Section id='contact'>
        <Container>
          <Left>
            <form ref={form} onSubmit={sendEmail}>
              <Title>Contact Me</Title>
              <Input placeholder='Name' name='from_name'/>
              <Input placeholder='Email' name='email'/>
              <Input placeholder='Subject' name='subject'/>
              <TextArea placeholder='Message' name='message'/>
              <Button type = "submit"> Send </Button>
              {success &&
              "Thank you for your message! I will get back to you as soon as possible!😃"}
            </form>
          </Left>
          <Right>
            <Canvas
            linear
            flat
            gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
            >
              <PerspectiveCamera makeDefault position={[0, 0, 1]} zoom={0.68} />
              <Stage preset="rembrandt" environment={"city"} intensity={0.4}>
                <ambientLight intensity={0.6} />
                <Cat />
              </Stage>
              <OrbitControls enableZoom = {false}/>
            </Canvas>
          </Right>
        </Container>
    </Section>
  )
}

export default Contact 