/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import styled from "styled-components"

const Jamboardstyle = styled.div`
    height: 700px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      padding: 10px 20px;
      border: 1px solid #f48c06;
      background: #f9c74f;
    }
`;
export default function JamboardRoom() {

  const renderJamboardRoom = () => {
    return (
      <Jamboardstyle>
        <a href="https://jamboard.google.com/d/1EzgBzJLwlOJfhD1x_X60DdIdY6n4eNPp89jVys1EUnw/viewer?f=0">Chuyển đến học nhóm</a>
      </Jamboardstyle>
    );
  }
  return (
    <div>
      {renderJamboardRoom()}
    </div>
  )
}
