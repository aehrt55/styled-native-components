import React, { Component } from 'react';
import PropTypes from 'prop-types';

const FIRST_COLOR = 'orange';
const SECOND_COLOR = 'green';
const SAMPLE_TEXT = 'Some text with color';

const applyColor = color => {
  return (color === FIRST_COLOR ? SECOND_COLOR : FIRST_COLOR);
};

export default function({ Button, Text, View }, styled) {
  const BlueContainer = styled(View)`
    background-color: blue;
    padding: 8px 16px;
  `;

  const ColorText = styled(Text)`
    color: ${props => props.color};
  `;
  ColorText.propTypes = {
    color: PropTypes.string.isRequired,
  };
  ColorText.defaultProps = {
    color: 'yellow',
  };
  return class ExtendsFromComponent extends Component {
    state = {
      color: FIRST_COLOR,
    };
    changeColor = () => this.setState(prevState => ({
      ...prevState,
      color: applyColor(prevState.color),
    }));
    render() {
      return (
        <BlueContainer>
          <Button title="click me" onPress={() => this.changeColor()} />
          <ColorText color={this.state.color}>{SAMPLE_TEXT}</ColorText>
        </BlueContainer>
      );
    }
  };
}
