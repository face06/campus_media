import React, { Component } from 'react';
import { View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Screen, Title, NavigationBar, ImageBackground, Tile, Subtitle, Divider, ListView} from '@shoutem/ui';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.renderRow = this.renderRow.bind(this);
        this.state = {
            videos: [
                {
                    "name": "Gaspar Brasserie",
                    "address": "185 Sutter St, San Francisco, CA 94109",
                    "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-1.jpg" },
                },
                {
                    "name": "Chalk Point Kitchen",
                    "address": "527 Broome St, New York, NY 10013",
                    "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-2.jpg" },
                },
                {
                    "name": "Kyoto Amber Upper East",
                    "address": "225 Mulberry St, New York, NY 10012",
                    "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-3.jpg" },
                },
                {
                    "name": "Sushi Academy",
                    "address": "1900 Warner Ave. Unit A Santa Ana, CA",
                    "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-4.jpg" },
                },
                {
                    "name": "Sushibo",
                    "address": "35 Sipes Key, New York, NY 10012",
                    "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-5.jpg" },
                },
                {
                    "name": "Mastergrill",
                    "address": "550 Upton Rue, San Francisco, CA 94109",
                    "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-6.jpg" },
                }
            ],
        }
    }

    renderRow(restaurant) {
        return (
            <View>
                <ImageBackground
                    styleName="large-banner"
                    source={{ uri: restaurant.image.url }}
                >
                    <Tile>
                        <Title styleName="md-gutter-bottom">{restaurant.name}</Title>
                        <Subtitle styleName="sm-gutter-horizontal">{restaurant.address}</Subtitle>
                    </Tile>
                </ImageBackground>
                <Divider styleName="line" />
            </View>
        );
    }

    render() {
        const restaurants = this.state.videos;

        return (
            <Screen>
                <NavigationBar
                    title="Restaurants"
                    styleName="inline"
                />
                <ListView
                    data={restaurants}
                    renderRow={this.renderRow}
                />
            </Screen>
        );
    }


};