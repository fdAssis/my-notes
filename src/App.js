import React, { Component } from 'react';

// Components ---- ./src/components
import Notes from './components/notes';
import Form from './components/form';

import './assets/app.css';
import './assets/index.css';

class App extends Component {
  render() {
    return (
      <section className="section-container">
        <Form />

        <Notes />
      </section>
    );
  }
}

export default App;
