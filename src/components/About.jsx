import React from 'react'
import {motion} from 'framer-motion'
import styled from "styled-components";

const Section = styled.div`
  padding-top: 3%;
  height: 95%;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 720px) {
    height: fit-content;
  }
`;

const Window = styled(motion.div)`
  background: #fff;
  width: flex;
  max-width: 70%;
  height: flex;
  min-height:max-content;
  margin: auto;
  margin-top: 12.5vh;
  margin-bottom: 12.5vh;
  border: 1px solid #acacac;
  border-radius: 6px;
  box-shadow: 0px 0px 20px #acacac;

  @media only screen and (max-width: 720px) {
    max-width: 98%;
    height: fit-content;
    padding-bottom: 15px;
  }
`;

const TitleBar = styled.div`
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0.0, #ebebeb, color-stop(1.0, #d5d5d5)));
  background: -webkit-linear-gradient(top, #ebebeb, #d5d5d5);
  background: -moz-linear-gradient(top, #ebebeb, #d5d5d5);
  background: -ms-linear-gradient(top, #ebebeb, #d5d5d5);
  background: -o-linear-gradient(top, #ebebeb, #d5d5d5);
  background: linear-gradient(top, #ebebeb, #d5d5d5);
  color: #4d494d;
  font-size: 11pt;
  line-height: 20px;
  text-align: center;
  width: 100%;
  height: 20px;
  border-top: 1px solid #f3f1f3;
  border-bottom: 1px solid #b1aeb1;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  cursor: default;
`;

const Title = styled.div`
  padding-right: 30px;
  text-weight: bolder !important;
  color: black;
`;

const Content = styled.a`
  align-items: center;
  display: flex;
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 720px) {
    flex-direction: column;
  }
`;

const ProfilePic = styled.img`
  flex; 1;
  padding-left: 3vw;
  padding-right: 3vw;
  width: 15vw;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  
  @media only screen and (max-width: 720px) {
    width: 35vw;
    flex-direction: column;
  }
`;

const Profile = styled.div`
  flex: 2;
  padding-left: 3vw;
  padding-right: 3vw;
  font-size: calc(12px + 0.5vw);
  
  @media only screen and (max-width: 720px) {
    font-size: 14px;
    flex-direction: column;
  }
`;


const Buttons = styled.div`
  padding-left: 8px;
  padding-top: 3px;
  float: left;
  line-height: 0px;
`;

const Close = styled.button`
  background: #ff5c5c;
  font-size: 9pt;
  width: 11px;
  height: 11px;
  border: 1px solid #e33e41;
  border-radius: 50%;
  display: inline-block;
`;

const Minimize = styled.button`
  background: #ffbd4c;
  font-size: 9pt;
  line-height: 11px;
  margin-left: 4px;
  width: 11px;
  height: 11px;
  border: 1px solid #e09e3e;
  border-radius: 50%;
  display: inline-block;
`;

const Zoom = styled.button`
  background: #00ca56;
  font-size: 9pt;
  line-height: 11px;
  margin-left: 6px;
  width: 11px;
  height: 11px;
  border: 1px solid #14ae46;
  border-radius: 50%;
  display: inline-block;
`;


const About = ({resumeData}) => {
  return (
    <Section id='about'>
      <Window drag dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
      >
        <TitleBar>
          <Buttons>
            <Close/>
            <Minimize/>
            <Zoom/>
          </Buttons>
          <Title>
            <h3>
            Untitled
            </h3>
          </Title>
        </TitleBar>

        <Content className='row'>
          <ProfilePic src='./img/ava.png'/>

          <Profile>
            <h3>About me</h3>
            <p>
              {resumeData.aboutme}
            </p>
          </Profile>
        </Content>

      </Window>

    </Section>
  )
}

export default About