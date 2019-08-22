import React, { Component } from 'react';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.name = props.name || 'Name';
    this.ws = new WebSocket(`ws://localhost:3000`);
    this.state = {
      value:'',
      wsMsg:null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
  }
  componentDidMount() {

  }

  handleResponse(e) {

  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
      console.log(this.state.value);
      this.ws.send(this.state.value);
      e.preventDefault();
  };

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
