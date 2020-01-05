import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 
import { MdCheckCircle } from "react-icons/md";
import { MyList } from './styles';

export default class List extends Component {
  render() {
    const tasks = this.props.tasks;
    const items = tasks.map((task, i) => (
      <li key={i}>
        <div className="title">
          <MdCheckCircle size={30}/>
          <h2>
            {task.name}
          </h2>
          <span onClick={() => this.props.remove(task.name)}>X</span>
        </div>
        <p>{task.description}</p>
      </li>
    ));

    return (
      <MyList>
        <ReactCSSTransitionGroup
          transitionName="include"
          transitionEnterTimeout={400}
          transitionLeaveTimeout={200}
        >
        {items}
        </ReactCSSTransitionGroup>
      </MyList>
    );
  }
}