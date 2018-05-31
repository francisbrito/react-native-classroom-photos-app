import { AppRegistry, YellowBox } from 'react-native';
import App from './App';

// HACK: Ignore `isMounted` warning until patch is pushed to `react-native@stable`
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);

AppRegistry.registerComponent('ClassroomApp', () => App);
