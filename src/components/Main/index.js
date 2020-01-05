import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from '../../styles/global';
import Form from '../Form';
import List from '../List';
import { Container } from './styles';

class App extends Component {
  state = {
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
    const { tasks } = this.state;
    if (prevState.tasks !== tasks) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  updateTasks = (newTask) => {
    const { tasks } = this.state;
    this.setState({
      tasks: [...tasks, newTask]
    });
  }

  
  removeTask = (ptask) => {
    const { tasks } = this.state;
    this.setState({
      tasks: tasks.filter(task => task.name !== ptask)
    })
  }

  render() {
    const { tasks } = this.state;
    return (
      <>
        <Container>
          <aside className="form">
            <Form update={this.updateTasks}/>
          </aside>
          <main className="list">
            <List tasks={tasks} remove={this.removeTask}/>
          </main>
        </Container>
        <ToastContainer />
        <GlobalStyle/>
      </>
    );
  }
}

export default App;
