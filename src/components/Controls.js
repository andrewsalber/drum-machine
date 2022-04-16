import React from 'react';
import Switch from '@material-ui/core/Switch'
import Box from '@material-ui/core/Box'
import Slider from '@material-ui/core/Slider';
import CardContent from '@material-ui/core/CardContent'


function Controls(props) {
    return (
        <CardContent>
            <Box display="flex" justifyContent="center" alignItems="center"><Switch checked={props.power} onChange={props.powerChange}/></Box>
            <Box border={1} display="flex" justifyContent="center" alignItems="center" height="30px">{props.message}</Box>
            <Slider disabled={!props.power} value={props.volume} onChange={props.sliderChange}/>
            <Box display="flex" justifyContent="center" alignItems="center"><Switch disabled={!props.power} checked={props.bankOneOrTwo} onChange={props.bankChange}/></Box>
        </CardContent>
    );
};

export default Controls;

