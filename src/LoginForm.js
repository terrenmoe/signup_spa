import React, { Component } from 'react';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.name = props.name || 'Name';
    this.state = {value:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    alert(`A ${this.name} has been submitted as ${this.state.value}`)
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          {this.name}:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder={`Enter your ${this.name}`}
          />
        </label>
      </form>
    );
  }
}
