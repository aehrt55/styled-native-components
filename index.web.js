/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import RnElements, { AppRegistry } from 'react-native';
import styled from 'styled-components';
import RnDecorator from './RnDecorator';
import App from './app'

// Sets up offline caching for all assets (disabled by default)
// You can enable offline caching by changing
// `enableOfflinePlugin` at the top of web/webpack.config.js
if (__OFFLINE__) {
  require('offline-plugin/runtime').install()
}

const DecoratedApp = RnDecorator({ RnElements, styled })(App);

AppRegistry.registerComponent('ExampleApp', () => DecoratedApp);
AppRegistry.runApplication('ExampleApp', {
  rootTag: window.document.getElementById('react-root'),
});
