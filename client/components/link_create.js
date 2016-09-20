import React, { Component } from 'react';

class LinkCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { error: '' };
  }

  handleSubmit(event) {
    event.preventDefault();
    Meteor.call('links.insert', this.refs.input.value, (err) => {
      if(err) {
        this.setState({ error: 'Please enter a valid URL' });
      } else {
        this.setState({ error: '' });
        this.refs.input.value = '';
      }
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="from-group">
            <label>Link to Shorten</label>
            <input ref="input" className="form-control" />
        </div>
        <div className="text-danger">{this.state.error}</div>
        <button className="btn btn-primary">Shorten</button>
      </form>
    );
  }
}

export default LinkCreate;
