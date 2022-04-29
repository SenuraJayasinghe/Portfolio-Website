import React from "react"
import styled from "styled-components"
import { Screen, Balls} from './LoadingScreensStyle';

const LoadingScreen = () => {
    return (
      <Screen>
        <Balls>
          <div className="ball one"></div>
          <div className="ball two"></div>
          <div className="ball three"></div>
        </Balls>
      </Screen>
    );
  };
  
  export default LoadingScreen;