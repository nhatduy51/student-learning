import React from "react";
import { Nav } from "react-bootstrap";
import styled from "styled-components"

const HeaderStyle =styled.div`
  height: 70px;
  background-color: #f9c74f;

  .container {
    height: 100%;
    max-width: 1400px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default function Header() {
  return (
    <HeaderStyle className="header">
      <div className="container">
       
        <Nav defaultActiveKey="/" as="ul">
          <Nav.Item as="li">
            <Nav.Link href="/">Trang chủ</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-1">Lớp học<caption></caption></Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-1">Kiểm tra nhóm</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/jamboard">Họp nhóm</Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav defaultActiveKey="/home" as="ul">
          <Nav.Item as="li">
            <Nav.Link href="/login">Đăng nhập</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/register">Đăng ký</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </HeaderStyle>
  );
}
