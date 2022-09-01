import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  z-index: 5;
  position: sticky;
  width: 960px;
  background-color: rgba(255,255,255, 0.1);
  top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  margin: 0;
  color: red;
  decoration: none;
  
  &.appName {
    text-decoration: none;
    margin-left: 10px;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;


export const Footer = styled.footer`
  z-index: 5;
  position: fixed;
  overflow: hidden;
  background-color: rgba(255,255,255, 0.5);
  bottom: 5px;
  width: 960px;
  padding: 8px 0;
  text-align: center;
  color: red;
  border-radius: 5px;
  

  > nav {
    display: flex;
  }
  // div {
  //   text-align: center;
  // }
`;