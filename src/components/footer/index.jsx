import React from 'react'
import styled from "styled-components"

const FooterStyle = styled.div`
  height: 70px;
  background-color: #f9c74f;
  .container {
    max-width: 1200px;
    width: 100%;
  }
`;
export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
      </div>
    </FooterStyle>
  )
}
