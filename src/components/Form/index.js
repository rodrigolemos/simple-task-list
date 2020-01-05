import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { MdExtension } from "react-icons/md";
import { MyForm } from './styles';

export default class Form extends Component {
  state = {
    name: '',
    description: '',
  };

  handleInputChange = e => {
    this.setState({
      [e.target.id]: e.target.value
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
    const { update } = this.props;
    update(this.state);
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
        <label htmlFor="name">Task</label>
        <input
          type="text"
          id="name"
          placeholder="Please enter a task name"
          value={this.state.name}
          onChange={this.handleInputChange}
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          placeholder="Please enter a short description"
          value={this.state.description}
          onChange={this.handleInputChange}
        />

        <button type="button" onClick={() => this.addTask()}>Add</button>
      </MyForm>
    );
  }
}