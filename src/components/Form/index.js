import React, { Component } from 'react';
import { MdPlaylistAdd } from "react-icons/md";
import { MyForm } from './styles';

export default class Form extends Component {
  state = {
    name: '',
    description: '',
  };

  handleTaskChange = e => {
    this.setState({
      name: e.target.value
    });
  }

  handleDescChange = e => {
    this.setState({
      description: e.target.value
    });
  }

  addTask = () => {
    this.props.update(this.state);
    this.setState({
      name: '',
      description: '',
    });
  }

  render() {
    return (
      <MyForm>
        <div className="heading-form">
          <h1>Simple task list</h1>
          <MdPlaylistAdd size={35}/>
        </div>
        <label htmlFor="task">Task</label>
        <input
          type="text"
          placeholder="Please enter a task name"
          value={this.state.name}
          onChange={this.handleTaskChange}
        />

        <label htmlFor="desc">Description</label>
        <input
          type="text"
          placeholder="Please enter a short description"
          value={this.state.description}
          onChange={this.handleDescChange}
        />

        <button type="button" onClick={() => this.addTask()}>Add</button>
      </MyForm>
    );
  }
}