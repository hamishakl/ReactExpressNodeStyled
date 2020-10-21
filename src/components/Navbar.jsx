import React, { Component } from "react"
import styled from "styled-components"

const Title = styled.h5`
    margin-left: 1em;
    margin-right: 1em;
`


const Nav = styled.div`
  width: 95%;
  height: 8vh;
  color: white;
  background-color: #d499b9;
  border-bottom: 1px solid white;
`

const NavWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

`

export default class Navbar extends Component {
  render() {
    return (
      <>
        <Nav>
          <NavWrapper>
            <Title>React Styled Node</Title>
            <Title>React Styled Node</Title>
            <Title>React Styled Node</Title>
            <Title>React Styled Node</Title>
            <Title>React Styled Node</Title>
          </NavWrapper>
        </Nav>
      </>
    )
  }
}
