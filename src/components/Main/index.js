import React, { Component } from 'react';
import GlobalStyle from '../../styles/global';
import Form from '../Form';
import List from '../List';
import { Container } from './styles';

class App extends Component {
  state = {
    loading: 'no',
    tasks: [],
  };

  componentDidMount() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.setState({
        tasks: JSON.parse(tasks),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tasks !== this.state.tasks) {
      localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }
  }

  updateTasks = (newTask) => {
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  }

  
  removeTask = (ptask) => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.name !== ptask)
    })
  }

  render() {
    return (
      <>
        <Container>
          <aside className="form">
            <Form update={this.updateTasks}/>
          </aside>
          <main className="list">
            <List tasks={this.state.tasks} remove={this.removeTask}/>
          </main>
        </Container>
        <GlobalStyle/>
      </>
    );
  }
}

export default App;
