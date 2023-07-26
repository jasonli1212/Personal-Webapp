import styled from 'styled-components'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import resumeData from './resume'
// import Contact from './components/Contact'
import React, {Suspense} from 'react'

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
  const Contact =  React.lazy(() => import('./components/Contact'));

  return (
    <>
      <Section>
        <Navbar />
      </Section>
      <Container>
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Projects resumeData={resumeData}/>
        <Suspense fallback={"Loading..."}>
          <Contact resumeData={resumeData}/>
        </Suspense>
      </Container>
    </>
  )
}

export default App
