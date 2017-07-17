/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';
import _Components from './modules';

const platformText = {ios: 'iOS', android: 'Android', web: 'Web' }

export default class ExampleApp extends Component {
  static propTypes = {
    RnElements: PropTypes.shape({
      ActivityIndicator: PropTypes.func.isRequired,
      Button: PropTypes.func.isRequired,
      Image: PropTypes.func.isRequired,
      ScrollView: PropTypes.func.isRequired,
      Switch: PropTypes.func.isRequired,
      Text: PropTypes.func.isRequired,
      TextInput: PropTypes.func.isRequired,
      Text: PropTypes.func.isRequired,
      TouchableHighlight: PropTypes.func.isRequired,
      TouchableOpacity: PropTypes.func.isRequired,
      TouchableWithoutFeedback: PropTypes.func.isRequired,
      View: PropTypes.func.isRequired,
    }).isRequired,
    styled: PropTypes.func.isRequired,
  };
  render() {
    const { RnElements, styled } = this.props;
    const { Sample } = _Components(RnElements, styled);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native! ({platformText[Platform.OS]})
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <Sample />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
