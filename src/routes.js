import {StackNavigator} from 'react-navigation';

import Home from './App/Home.react';
import Main from './App/Main.react';

const AppNavigator = StackNavigator({
    main: {screen: Main},
    home: {screen: Home},
}, {
    headerMode: 'none',
});

export default AppNavigator;