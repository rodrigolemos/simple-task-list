import React, { Component } from 'react';
import GlobalStyle from '../../styles/global';
import Form from '../Form';
import List from '../List';
import { Container } from './styles';

class App extends Component {
  render() {
    return (
      <>
        <Container>
          <aside className="form">
            <Form/>
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
