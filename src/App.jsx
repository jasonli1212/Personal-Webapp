import styled from 'styled-components'
import Header from './components/Header'
import About from './components/About'
import Navbar from './components/Navbar'
import resumeData from './resume'
import React, {Suspense} from 'react'
import Contact from './components/Contact'
import Project from './components/Projects' 


const Section = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center
`;

const Container = styled.div`
  height: 100vh;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: black;
  background: url("./img/background.jpg") center center/cover no-repeat fixed;
  &::-webkit-scrollbar{
    display: none;
  }
`;

function App() {

  return (
    <>
      <Section>
        <Navbar />
      </Section>
      <Container>
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Project resumeData={resumeData}/>
        <Contact resumeData={resumeData}/>
      </Container>
    </>
  )
}

export default App
