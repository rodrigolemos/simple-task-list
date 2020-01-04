import React, { Component } from 'react';

export default class List extends Component {
  render() {
    const tasks = this.props.tasks;
    return (
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>{task.name}</li>
        ))}
      </ul>
    );
  }
}