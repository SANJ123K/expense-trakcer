import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
function Header() {
  return (
    <HeadStyled>
      <button className='button'>
        <NavLink 
        to ="/login"
        style={{textDecoration:"none", color:"white"}}
        >
        Login/Signin
        </NavLink>
      </button>
    </HeadStyled>
  )
}

const HeadStyled = styled.div`
    height: 60px;
    width:100vw;
    display:flex;
    justify-content:end;
    align-items:center;
    background-color:#232F3E;
    .button {
    top:50%;
    background-color:red;
    color: #fff;
    border:none; 
    border-radius:10px; 
    padding:15px;
    height:40px; 
    min-width: 120px;
    cursor:pointer;
  }
  .button:hover{
  background-color:green;}

`

export default Header
