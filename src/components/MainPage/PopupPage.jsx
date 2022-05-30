import React from "react";
import styled from "styled-components";
import { Modal, Button } from "antd";

const PopupPage = () => {
  return (
    <div>
      <Button type="primary">버튼</Button>
      <Modal title="제목">
        <p>내용</p>
      </Modal>
    </div>
  );
};

export default PopupPage;
