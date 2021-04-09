import React, { Component } from 'react';

// Components ---- ./src/components
import Notes from './components/notes';
import Form from './components/form';

class App extends Component {
  render() {
    return (
      <section>
        <Form />

        <Notes />
      </section>
    );
  }
}

export default App;
