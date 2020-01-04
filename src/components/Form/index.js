import React, { Component } from 'react';
import { MyForm } from './styles';

export default class Form extends Component {
  render() {
    return (
      <MyForm>
        <h1 className="heading-form">
          Simple task list
        </h1>
        <label htmlFor="task">Task</label>
        <input type="text" name="task" id="task" placeholder="Please enter a task name"/>

        <label htmlFor="due">Due to</label>
        <input type="date" name="due" id="due"/>

        <button type="button">Add</button>
      </MyForm>
    );
  }
}