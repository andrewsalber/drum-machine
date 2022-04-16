import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button'


function NoiseButton(props) {
    const buttonStart = (event) => {    
        if (event.keyCode === props.data.keyCode) {
            props.buttonChangeText(props.data.id)
            let audio = new Audio(props.data.url)
            audio.volume = props.volume / 100
            audio.play()
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", buttonStart);
      },[]);

    const clickStart = () => {
        props.buttonChangeText(props.data.id)
        let audio = new Audio(props.data.url)
        audio.volume = props.volume / 100
        audio.play()
    }
    
    return (
        <Button 
        disabled={!props.power} 
        size='small' 
        onClick={clickStart} 
        variant="outlined" 
        style={{maxWidth: '60px', maxHeight: '30px', minWidth: '60px', minHeight: '30px'}}
        >{props.data.keyTrigger}</Button>
    );
}

export default NoiseButton;

