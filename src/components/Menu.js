import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const MenuStyle = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  a, a:link, a:visited, a:hover, a,active{
    color: ${props => props.isMobile ? "red" : "black"}
  }
`;

const NavStyle = styled.ul`
  list-style-type: none;
  padding-left: 0;
  width: calc(100% - 70px);
  display: flex;
  justify-content: space-evenly;
  align-items: center; 
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin: 10px 5px 10px 5px;
  padding: 0;
`;


function Menu(props){
    return (
      <MenuStyle isMobile={props.isMobile}>
        <Logo src={props.logo} alt=""></Logo>
        <NavStyle onClick={props.updImg}>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/'>All breeds</Link></li>
            <li><Link to='/'>BreedOverview</Link></li>
            <li><Link to='/'>RandomBreed</Link></li>
        </NavStyle>
      </MenuStyle>
    );
}

export default Menu;