import React from 'react'
import styled from "styled-components";

const Section = styled.div`
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  background-image: linear-gradient(to bottom right, rgba(255,255,255,0.3), rgba(255,255,255,0.2));
  box-shadow: 0px 0px 2px rgba(30,30,30,0.5);
  backdrop-filter: blur(10px);

  @media only screen and (max-width: 768px) {
    width: 100%;
    display: none;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
`;


const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Navbar = () => {
    return (
      <Section>
        <Container>
          <Links>
            <List>
              <ListItem><Link href = '#home'>Home</Link></ListItem>
              <ListItem><Link href = '#about'>About</Link></ListItem>
              <ListItem><Link href = '#projects'>Projects</Link></ListItem>
              <ListItem><Link href = '#contact'>Contact</Link></ListItem>
            </List>
          </Links>
        </Container>
      </Section>
    );
}

export default Navbar