import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {ScrollView, Image, Text, View, Linking } from 'react-native';
import { Toolbar, Card, Button } from "react-native-material-ui";
import {
    Player,
    MediaStates
} from 'react-native-audio-toolkit';

import CustomBottomNavigation from '../Components/CustomBottomNavigation';
import Container from '../Components/Container';

const propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};

class Radio extends Component {

    constructor(props) {
        super(props);

        this.state = { active: 'radio', isPlaying: true };
        this.player = new Player("http://streaming.radio.funradio.fr/fun-1-48-192");
    }

    renderToolbar() {
        return (
            <Toolbar
                key="toolbar"
                leftElement="menu"
                onLeftElementPress={() => this.props.navigation.goBack()}
                centerElement="Campus Média"
            />
        );
    }

    render() {
        return (
            <Container>
                { this.renderToolbar() }
                <Button text={"Play"} onPress={() => this.player.play()}/>
                <Button text={"Pause"} onPress={() => this.player.pause()}/>
                <CustomBottomNavigation parent={this}/>
            </Container>
        )
    }

}

Radio.propTypes = propTypes;

export default Radio;
