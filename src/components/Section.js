import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({
  backGroundImg,
  aboutTxt,
  buttonTxt,
  informationTxt,
  title,
}) {
  return (
    <Wrap bgImage={backGroundImg}>
      <Fade bottom>
        <Information>
          <h4>{aboutTxt}</h4>
          <h1>{title}</h1>
          <p> {informationTxt} </p>
          <Button>{buttonTxt}</Button>
        </Information>
      </Fade>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url("./image/${props.bgImage}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  align-items: flex-start;
  padding-top: 18vh;
  margin-left: 70px;
  min-height: 60vh;
  max-width: 600px;

  h1,
  h4,
  p {
    color: white;
    font-weight: 400;
    margin: 10px;
  }

  h4 {
    font-size: 20px;
  }
  h1 {
    font-size: 40px;
  }

  h1,
  h4 {
    text-transform: uppercase;
  }
`;

const Button = styled.div`
  margin-top: 20px;
  width: 140px;
  color: #fff;
  text-align: center;
  padding: 10px 25px;
  font-weight: 500;
  z-index: 1;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  border: 2px white solid;

  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 0;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: white;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5) 7px 7px 20px 0px
        rgba(0, 0, 0, 0.1),
      4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  &:hover {
    color: #000;
  }
  &:hover:after {
    top: auto;
    bottom: 0;
    height: 100%;
  }
  &:active {
    top: 2px;
  }
  :hover {
  }
`;

export default Section;
