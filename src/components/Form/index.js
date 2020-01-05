import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { MdExtension } from "react-icons/md";
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
    if (!this.state.name || !this.state.description) {
      toast.error('Please enter a name and a short description for the task.', {
        position: 'top-left',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
      return;
    }
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
          <MdExtension size={35}/>
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