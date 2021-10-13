import React from 'react';
import Switch from '@material-ui/core/Switch'
import Box from '@material-ui/core/Box'
import Slider from '@material-ui/core/Slider';
import CardContent from '@material-ui/core/CardContent'


class Controls extends React.Component {
    render() {
        return (
            <CardContent>
                <Box display="flex" justifyContent="center" alignItems="center"><Switch checked={this.props.power} onChange={this.props.powerChange}/></Box>
                <Box border={1} display="flex" justifyContent="center" alignItems="center" height="30px">{this.props.message}</Box>
                <Slider disabled={!this.props.power} value={this.props.volume} onChange={this.props.sliderChange}/>
                <Box display="flex" justifyContent="center" alignItems="center"><Switch disabled={!this.props.power} checked={this.props.bankOneOrTwo} onChange={this.props.bankChange}/></Box>
            </CardContent>
        );
    };
}

export default Controls;

