import {Grid} from '@material-ui/core';
import React, { useState } from 'react';
import Keyboard from './components/Keyboard'
import Card from '@material-ui/core/Card'
import Controls from './components/Controls'
import Container from '@material-ui/core/Container'

function App () {
  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState(100);
  const [bank, setBank] = useState(false);
  const [message, setMessage] = useState(" ");

  const sliderChange = (event, newValue) => {
    setVolume(newValue);
    setMessage("volume: " + volume)
  }

  const bankChange = (event) => {
    setBank(!bank);
    setMessage("changed to disk " + (bank? 1 : 2));
  };

  const powerChange = (event) => {
    setPower(!power);
  }

  const buttonChangeText = (text) => {
    setMessage(text)
  }

  return (
    <div id="drum-machine" style={{height: "100vh", display:"flex", alignItems: "center"}}>
    <Container id="display" maxWidth="sm">
    <Card>
        <Grid container direction="row" alignItems="center"  >
          <Grid item xs={6}>
            <Keyboard 
            power={power}
            volume={volume}
            bank={bank}
            buttonChangeText={buttonChangeText}/>
          </Grid>
          <Grid item xs={6} >
            <Controls 
            message={message}
            power={power}
            powerChange={powerChange}
            volume={volume} 
            sliderChange={sliderChange} 
            bankOneOrTwo={bank} 
            bankChange={bankChange}/>
          </Grid>
        </Grid>
      </Card>
    </Container>
    </div>
  );
};

export default App;
