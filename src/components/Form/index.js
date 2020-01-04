import React, { Component } from 'react';
import { MdPlaylistAdd } from "react-icons/md";
import { MyForm } from './styles';

export default class Form extends Component {
  state = {
    newTask: '',
  };

  handleInputChange = e => {
    this.setState({
      newTask: e.target.value
    });
  }

  addTask = () => {
    this.props.update(this.state.newTask);

    this.setState({
      newTask: ''
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
        <input type="text" name="task" id="task" placeholder="Please enter a task name"
          value={this.state.newTask}
          onChange={this.handleInputChange}
        />

        <button type="button" onClick={() => this.addTask()}>Add</button>
      </MyForm>
    );
  }
}