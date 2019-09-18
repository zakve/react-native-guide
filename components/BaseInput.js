import React from 'react'
import { TextInput } from 'react-native';

export default class BaseInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" }

    //this.handleChange = this.handleChange.bind(this);
    //this.handleClick = this.handleClick.bind(this);
  }

  /*
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleClick(event) {
    if (this.state.value) {
      this.setState({ value: "" })
    }
  }
  */

  render() {
    return (
      <TextInput
        style={{ height: 40 }}
        placeholder="Basic input component!"
        onChangeText={(text) => this.setState({ text })}
        value={this.state.text}
      />
    );
  }
}