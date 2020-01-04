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

  updateTasks = (newTask) => {
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  }

  render() {
    return (
      <>
        <Container>
          <aside className="form">
            <Form update={this.updateTasks}/>
          </aside>
          <main className="list">
            <List/>
          </main>
        </Container>
        <GlobalStyle/>
      </>
    );
  }
}

export default App;
