import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        backGroundImg="Dragon_Docking.webp"
        aboutTxt="Upcoming Launch"
        title="CRS-22 MISSION"
        buttonTxt="Watch"
      />
      <Section
        backGroundImg="Crew-1_Crew.webp"
        aboutTxt="Completed Mission"
        title="DRAGON RETURNS TO EARTH"
        buttonTxt="Rewatch"
        informationTxt="After 167 days, Dragon completes its first long-duration mission."
      />
      <Section
        backGroundImg="HP_Star28_DSC.webp"
        aboutTxt="Recent Launch"
        title="STARLINK MISSION"
        buttonTxt="Rewatch"
      />

      <Section
        backGroundImg="hls-resized-2.webp"
        title="STARSHIP TO LAND NASA ASTRONAUTS ON THE MOON"
        buttonTxt="Learn More"
      />
      <Section
        backGroundImg="iss_game.webp"
        title="DRAGON DOCKING SIMULATOR"
        buttonTxt="Try Now"
        informationTxt="
        Dragon is designed to autonomously dock and undock with the International Space Station. However, the crew can take manual control of the spacecraft if necessary."
      />
    </Container>
  );
}

const Container = styled.div``;

export default Home;
