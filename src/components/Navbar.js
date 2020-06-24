import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo_LAKSHMI-1.jpg'
import {ButtonContainer} from './Button'
import styled from 'styled-components'

export default class Navbar extends Component {
  render() {
    return (
     
      <nav className="navbar navbar-expand-sm  navbar-dark px-sm-5">
        <NavbarWrapper>
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
 
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
             lakshmi products
             </Link>
          </li>
        </ul>
     </NavbarWrapper>
        <Link className="ml-auto" to="/cart">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus"></i>
            </span>
              my cart
            </ButtonContainer>
        </Link>
      
        </nav>
      
    )
  }
}


const NavbarWrapper = styled.nav`
   
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100px;
      border-radius: 50%;
     
    }
    .nav-link {
      text-align: center;
      color: var(--mainblack) !important;
      border: 1px solid var(--mainGold);
      font-size: 1.4rem;
      text-transform: capitalize;
    }
`