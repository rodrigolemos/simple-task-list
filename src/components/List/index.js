import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 
import { MdCheckCircle, MdThumbUp } from "react-icons/md";
import { MyList, Empty } from './styles';

export default class List extends Component {
  render() {
    const { tasks, remove } = this.props;
    const items = tasks.map((task, i) => (
      <li key={i}>
        <div className="title">
          <h2>
            {task.name}
          </h2>
          <MdCheckCircle size={30} onClick={() => remove(task.name)}/>
        </div>
        <p>{task.description}</p>
      </li>
    ));

    return (
      <>
        { tasks.length ? (
          <MyList>
            <ReactCSSTransitionGroup
              transitionName="include"
              transitionEnterTimeout={300}
              transitionLeaveTimeout={100}
            >
            {items}
            </ReactCSSTransitionGroup>
          </MyList>
        ) : (
          <Empty>
            <h3 className="empty">Empty list</h3>
            <MdThumbUp size={55}/>
          </Empty>
        )}
      </>
    );
  }
}