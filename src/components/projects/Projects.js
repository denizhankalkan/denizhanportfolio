import React, { Component } from "react";
import styled from "styled-components";
import { ColorScheme } from "../theme/styleConstants.js";
import {info} from "../../info/Info.js";

const PortRow = styled.div`
  margin: 0;
  padding-top: 50px;
  padding-bottom: 50px;
  display: block;
`;

const CodeThumbnail = styled.img`
  width: 100%;
  display: block;
  margin: 0 auto;
`;

export const CenteredHeader = styled.h4`
  text-align: center;
  margin-bottom: 1.25em;
  margin-top: 1rem;
`

const PortAllText = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const PortTitleContainer = styled.div`
  position: relative;
  margin: 0 auto;
  align-items: baseline;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-end;
  align-content: stretch;

  @media (max-width: 600px) {
    display: inline;
  }
`;

const PortTitle = styled.h2`
  flex: 1;
  font-family: Gotham, Helvetica, Arial, sans-serif;
  font-weight: 400;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const PortButton = styled.a`
  padding: 10px 15px;
  background: 0 0;
  border: 2px solid ${ColorScheme.secondary};
  border-radius: 3px;
  margin: 0 5px;
  color: ${ColorScheme.secondary};
  font-family: Gotham, Helvetica, Arial, sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  transition: all 0.3s ease;
  &:hover {
    background: ${ColorScheme.primary};
    color: #fff;
    border-color: ${ColorScheme.primary};
  }

  @media (max-width: 600px) {
    padding: 5px 7px;
  }
`;

const PortButtonContainer = styled.div`
  width: 30%;
  margin: 0 auto;

  @media (max-width: 600px) {
    margin-top: 15px;
    width: 50%;
  }
`;

const PortDescription = styled.p`
  display: block;
  margin: 15px 0;
`;

const UsedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
`;

const UsedItem = styled.ul`
  display: inline-block;
  padding: 7px 7px 5px;
  margin-right: 5px;
  margin-bottom: 10px;
  color: #fff;
  background: ${ColorScheme.secondary};
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

const Container = styled.div`
  display: inline-flex;
  margin: 0 5px;
  color: black;
  font-size: 16px;
`

const Line = styled.hr`
  margin-right: 40px;
  margin-left: 40px;
  color: pink;
  border: 1px solid #eee;
`

const SkillContainer = styled.div`
 margin-top: 6rem;
 margin-left: 2rem;
`

const SubTitle = styled.h5`
 margin-top: 1rem;
`

export default function Project() {
    return (
      <Container>
        <SkillContainer>
          <CenteredHeader><span style={{background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Skills:</span></CenteredHeader>
          <div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <SubTitle>Front-end:</SubTitle>
              <ul>
                <li>JavaScript (ES6/ES7/ES8)</li>
                <li>React</li>
                <li>Redux</li>
                <li>Angular</li>
                <li>RXJS</li>
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>HTML5</li>
                <li>CSS3/Sass/Emotion</li>
                <li>AJAX</li>
                <li>jQuery</li>
                <li>Jest</li>
                <li>Material-UI</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <SubTitle>Back-end:</SubTitle>
              <ul>
                <li>Node.js</li>
                <li>Firestore/Firebase</li>
                <li>Google Cloud Functions</li>
                <li>Express</li>
                <li>SQL/PostgreSQL</li>
                <li>Python</li>
                <li>C#</li>
                <li>Java</li>
                <li>Spring</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <SubTitle>Other:</SubTitle>
              <ul>
                <li>Git</li>
                <li>Webpack</li>
                <li>JSON</li>
                <li>Azure Devops</li>
                <li>Agile development</li>
              </ul>
            </div>
          </div>
        </SkillContainer>
        
        <div>
          <CenteredHeader><span style={{background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}> Recent Work: </span></CenteredHeader>
          <PortRow>
            {/* <a href="https://open.nytimes.com/building-a-text-editor-for-a-digital-first-newsroom-f1cb8367fc21" target="_blank">
              <CodeThumbnail src={require("../assets/oakgif.gif")} />
            </a> */}
            
            <PortAllText>
              <PortTitle>Real Time Cyrpto Tracking</PortTitle>
              <PortDescription>
              When you start typing the crypto you want to see the data of in the search bar, the trading values come to the table. With the Binance API, you can see real time data on the screen with websockets. Very soon, different features will be added and we will have the result of a parallel Binance website.
              </PortDescription>
              <PortDescription>
                {/* <a href="https://open.nytimes.com/building-a-text-editor-for-a-digital-first-newsroom-f1cb8367fc21" target="_blank">
                  Building a Text Editor For a Digital-First Newsroom
                </a> */}
              </PortDescription>
              <UsedList>
                <UsedItem>React.js</UsedItem>
                <UsedItem>Redux</UsedItem>
                <UsedItem>Firestore</UsedItem>
                <UsedItem>Cloud Functions</UsedItem>
                <UsedItem>Jest</UsedItem>
                <UsedItem>ProseMirror</UsedItem>
                <UsedItem>Sass</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>
          <Line />
          <PortRow>
            {/* <a href="https://align-a0b08.web.app/" target="_blank">
              <CodeThumbnail src={require("../assets/AlignScreenshot.png")} />
            </a> */}
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>Denmax Travel</PortTitle>
                {/* <PortButtonContainer>
                  <PortButton href="https://align-a0b08.web.app" target="_blank">
                    Demo
                </PortButton>
                  <PortButton
                    href="https://github.com/align-capstone/align"
                    target="_blank"
                  >
                    Code
                </PortButton>
                </PortButtonContainer> */}
              </PortTitleContainer>
              <PortDescription>
              The story of the Denmax Travel app actually emerged with the idea of my challange to travel Europe on my own. I thought about which steps I had the most difficulty in this process and then I came up with the idea of making such an app. We write down which route we will take and where we will start. We also enter where and where we will end this travel. After entering the date information, the AI on our website shows us the most economical and least tiring travel plan. It will be completed very soon!
              </PortDescription>
              {/* <PortDescription>
                I worked with two incredibly smart teammates to create Align in
              three weeks. You can read about our process building it{" "}
                <a href="https://medium.com/ladies-storm-hackathons/how-we-built-our-first-full-stack-javascript-web-app-in-three-weeks-8a4668dbd67c">
                  here
              </a>.
            </PortDescription> */}
              <UsedList>
                <UsedItem>React.js</UsedItem>
                <UsedItem>Firebase</UsedItem>
                <UsedItem>Material-UI</UsedItem>
                <UsedItem>Victory.js</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>
          <Line />
          <PortRow>
            {/* <a href="https://github.com/sophiaciocca/ok-collab" target="_blank">
              <CodeThumbnail
                src={require("../assets/OkCollabScreenshot.png")}
              />
            </a> */}
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>Security Robot</PortTitle>
                {/* <PortButtonContainer>
                  <PortButton
                    href="https://github.com/sophiaciocca/ok-collab"
                    target="_blank"
                  >
                    Code
                  </PortButton>
                </PortButtonContainer> */}
              </PortTitleContainer>
              <PortDescription>
              The security robot, which I completed as my university graduation thesis, can be used in every home and every workplace. In this project, which I developed with Python programming language and openCV library, we worked in collaboration with a friend. The purpose of the robot is to send a notification to the application on the phone when it detects foreign faces with the face recognition system. The external design of the robot was printed with a 3D printer. Visuals and source code will be added soon.
            </PortDescription>
          
              <UsedList>
                <UsedItem>Python</UsedItem>
                <UsedItem>OpenCV</UsedItem>
                <UsedItem>PostgreSQL</UsedItem>
                <UsedItem>JavaScript</UsedItem>
                <UsedItem>Node.JS</UsedItem>
                <UsedItem>HTML</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>
          <Line />
          <PortRow>
            {/* <a href="https://github.com/limitless-leggings/limitless-leggings" target="_blank">
              <CodeThumbnail
                src={require("../assets/LimitlessLeggingsScreenshot.png")}
              />
            </a> */}
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>Wheater Application</PortTitle>
                {/* <PortButtonContainer>
                  <PortButton
                    href="https://github.com/limitless-leggings/limitless-leggings"
                    target="_blank"
                  >
                    Code
                  </PortButton>
                </PortButtonContainer> */}
              </PortTitleContainer>
              <PortDescription>
              After adding city and country information, the application brings real time weather information and a list of recommendations. Very soon I aim to add risks related to natural disasters (earthquakes, floods, storms) to the information box.
            </PortDescription>
              <UsedList>
                <UsedItem>React.js</UsedItem>
                <UsedItem>Redux</UsedItem>
                <UsedItem>PostgreSQL</UsedItem>
                <UsedItem>CSS</UsedItem>
                <UsedItem>Node.JS</UsedItem>
                <UsedItem>Express</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>
        </div>
      </Container>
    );
}
