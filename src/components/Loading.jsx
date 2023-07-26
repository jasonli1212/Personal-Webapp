import React from 'react'
import styled from "styled-components";
import {Triangle} from 'react-loader-spinner'

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


const Loading = () => {
    return (
        <>
            <Section>
                <Triangle
                    color="#00BFFF"
                    height={100}
                    width={100}
                />
            </Section>
        </>
    )
}

export default Loading