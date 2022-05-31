import React from "react";
import styled from "styled-components";
// import { Modal } from "antd";

const Popup = styled.div`
  width: 350px;
  height: 500px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 5px gray;
`;
const PopupImage = styled.img`
  border-radius: 10px;
  width: 350px;
  height: 500px;
`;

const PopupButton = styled.button`
  position: absolute;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: black;
  opacity: 0.65;
  color: #fff;
  font-size: 1.5rem;
  margin: 15px;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const PopupPage = () => {
  return (
    <Popup>
      <PopupButton>X</PopupButton>
      <PopupImage src="https://pbs.twimg.com/media/EWwwRz5WsAETaUb.png"></PopupImage>
    </Popup>
  );
};

export default PopupPage;
