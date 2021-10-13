import React from 'react';
import Button from '@material-ui/core/Button'

class NoiseButton extends React.Component {
    constructor(props) {
        super(props);
        this.buttonStart = this.buttonStart.bind(this);
      };

    componentDidMount() {
        document.addEventListener("keydown", this.buttonStart);
    }

    clickStart = () => {
        this.props.buttonChangeText(this.props.data.id)
        let audio = new Audio(this.props.data.url)
        audio.volume = this.props.volume / 100
        audio.play()
    }

    buttonStart = (event) => {    
        //audio.play()
        if (event.keyCode === this.props.data.keyCode) {
            this.props.buttonChangeText(this.props.data.id)
            let audio = new Audio(this.props.data.url)
            audio.volume = this.props.volume / 100
            audio.play()
        }
    }
    render() {
        return (
            <Button 
            disabled={!this.props.power} 
            size='small' 
            onClick={this.clickStart} 
            variant="outlined" 
            style={{maxWidth: '60px', maxHeight: '30px', minWidth: '60px', minHeight: '30px'}}
            >{this.props.data.keyTrigger}</Button>
        );
    };
}

export default NoiseButton;

