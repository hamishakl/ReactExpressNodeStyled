import React, { Component } from "react"
import styled from "styled-components"
import Navbar from "./Navbar"

const HeroContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #d499b9;
  color: #011638;
  display: flex;
  flex-direction: column;
  align-items: center;
  `

const Title = styled.h1``

const HeroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`

export default class Hero extends Component {
  render() {
    return (
      <>
        <HeroContainer>
          <Navbar />
          <HeroWrapper>
            <Title>React Styled Node Express</Title>
          </HeroWrapper>
        </HeroContainer>
      </>
    )
  }
}
