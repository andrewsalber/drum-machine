import {Grid} from '@material-ui/core';
import React from 'react';
import Keyboard from './components/Keyboard'
import Card from '@material-ui/core/Card'
import Controls from './components/Controls'
import Container from '@material-ui/core/Container'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      power: true,
      volume: 50,
      bank: false,
      message: " "
    };

    this.sliderChange = this.sliderChange.bind(this);
    this.bankChange = this.bankChange.bind(this);
    this.powerChange = this.powerChange.bind(this);
    this.buttonChangeText = this.buttonChangeText.bind(this);
  };

  sliderChange(event, newValue) {
    this.setState({
      volume: newValue,
      message: "volume: " + this.state.volume
    });
  };

  bankChange = (event) => {
    this.setState(prevState => ({
      bank: !prevState.bank,
      message: "changed to disk " + (this.state.bank ? 1 : 2)
    }));
  };

  powerChange = (event) => {
    this.setState(prevState => ({
      power: !prevState.power
    }));
  }

  buttonChangeText = (text) => {
    this.setState({
      message: text
    })
  }

  render() {
    return (
      <div id="drum-machine" style={{height: "100vh", display:"flex", alignItems: "center"}}>
      <Container id="display" maxWidth="sm">
      <Card>
          <Grid container direction="row" alignItems="center"  >
            <Grid item xs={6}>
              <Keyboard 
              power={this.state.power}
              volume={this.state.volume}
              bank={this.state.bank}
              buttonChangeText={this.buttonChangeText}/>
            </Grid>
            <Grid item xs={6} >
              <Controls 
              message={this.state.message}
              power={this.state.power}
              powerChange={this.powerChange}
              volume={this.state.volume} 
              sliderChange={this.sliderChange} 
              bankOneOrTwo={this.state.bank} 
              bankChange={this.bankChange}/>
            </Grid>
          </Grid>
        </Card>
      </Container>
      </div>
    );
  };
}

export default App;
