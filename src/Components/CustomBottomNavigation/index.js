import React, { Component } from 'react';
import { Text } from 'react-native';
import { BottomNavigation, Icon } from "react-native-material-ui";

class CustomBottomNavigation extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.parent)
            return;

        return (
            <BottomNavigation
                active={this.props.parent.state.active}
                hidden={this.props.parent.state.bottomHidden}
                style={{container: {position: 'absolute', bottom: 0, left: 0, right: 0}}}
            >
                <BottomNavigation.Action
                    key="videos"
                    icon={<Icon name="video-library"/>}
                    label="Vidéos"
                    onPress={() => this.props.parent.setState({active: 'videos'})}
                />
                <BottomNavigation.Action
                    key="radio"
                    icon="radio"
                    label="Radio"
                    onPress={() => this.props.parent.setState({active: 'radio'})}
                />
                <Text>MIDDLE</Text>
                <BottomNavigation.Action
                    key="bookmark-border"
                    icon="bookmark-border"
                    label="Bookmark"
                    onPress={() => this.props.parent.setState({active: 'bookmark-border'})}
                />
                <BottomNavigation.Action
                    key="settings"
                    icon="settings"
                    label="Paramètres"
                    onPress={() => this.props.parent.setState({active: 'settings'})}
                />
            </BottomNavigation>
        );
    }

}

export default CustomBottomNavigation;
