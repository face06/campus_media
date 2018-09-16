import { Player } from 'react-native-audio-stream';
import React, {Component} from "react";

export default class PlayerUI extends Component {
    render() {
        return(
            <Player url={"https://listen.radioking.com/radio/12856/stream/24842"}/>
        );
    }
}
