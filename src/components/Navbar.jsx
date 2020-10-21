import React, { Component } from "react"
import styled from "styled-components"

const Title = styled.h5`
`

const NavWrapper = styled.div`
  width: 100%;
  height: 8vh;
  color: white;
  background-color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export default class Navbar extends Component {
  render() {
    return (
      <>
      <NavWrapper>
        <Title>React Styled Node</Title>
      </NavWrapper>
      </>
    )
  }
}
