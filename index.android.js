/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import RnElements, { AppRegistry } from 'react-native';
import styled from 'styled-components/native';
import RnDecorator from './RnDecorator';
import App from './app'

const DecoratedApp = RnDecorator({ RnElements, styled })(App);

AppRegistry.registerComponent('ExampleApp', () => DecoratedApp);
