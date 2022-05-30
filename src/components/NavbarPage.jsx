import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  background: #fff;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  top: 0;
  font-size: 1.2rem;
  position: sticky;
  box-shadow: 0 1px 8px gray;
`;

const NavLogo = styled.div`
  display: flex;
  font-size: 2rem;
  align-items: center;
  text-decoration: none;
  color: black;
  font-weight: 600;
  cursor: pointer;

  img {
    width: 80px;
    height: 80px;
    margin-left: 80px;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0 80px 0 0;
`;

const NavItem = styled.li`
  align-items: center;
`;

const NavButton = styled.button`
  background: #ff4800;
  display: flex;
  align-items: center;
  font-size: 15px;
  padding: 12px;
  margin: 5px;
  border-radius: 8px;
  cursor: pointer;
  color: #fff;
  border: none;
  font-weight: 500;

  &:hover {
    background: #e84200;
  }
`;

const NavLink = styled.div`
  display: flex;
  padding: 0 15px;
  font-size: 15px;
  align-items: center;
  cursor: pointer;
  height: 80px;
  font-weight: 500;

  &:hover {
    color: #ff4800;
    border-bottom: 2px solid #ff4800;
  }
`;

const NavbarPage = () => {
  return (
    <Nav>
      <NavLogo to="/">
        <img
          src="https://us.123rf.com/450wm/viktorijareut/viktorijareut1505/viktorijareut150500811/40216239--텐트-캠핑-장비-캠핑은-텐트-흰색으로-격리-야영.jpg"
          alt="logo"
        />
        CAMP
      </NavLogo>

      <NavMenu>
        <NavItem>
          <NavLink to="/">지도</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/">커뮤니티</NavLink>
        </NavItem>
        <NavButton to="/">로그인</NavButton>
        {/* <NavButton to="/">로그아웃</NavButton> */}
        <NavButton to="/">회원가입</NavButton>
        {/* <NavButton to="/">마이페이지</NavButton> */}
      </NavMenu>
    </Nav>
  );
};

export default NavbarPage;
