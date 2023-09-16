import React from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import {BrowserRouter} from "react-router-dom";
import styled from 'styled-components';

const AppDiv = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-size: 1.15em;
`;

export const CenteredHeader = styled.h4`
  text-align: center;
  margin-bottom: 1.25em;
`

const ContainerDiv = styled.div`
  margin: 1% 17% 3% 17%;
  flex: 1;
  font-family: 'Open Sans', sans-serif;
`

function App() {
   return (
      <div>
          <AppDiv> 
            <BrowserRouter>
              <BaseLayout/>
              {/* <ContainerDiv>
              {this.props.children}
              </ContainerDiv> */}
           </BrowserRouter>
          </AppDiv> 
      </div>
   );
}


export default App;
