import {AppRegistry} from 'react-native';
import Navigator from './src/Navigator';
import {name as appName} from './app.json';
import AddPhoto from './src/screens/AddPhoto';

AppRegistry.registerComponent(appName, () => AddPhoto);
