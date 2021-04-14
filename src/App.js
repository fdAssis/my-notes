import React, { Component } from 'react';

// Components ---- ./src/components
import Notes from './components/notes';
import Form from './components/form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      note: [],
    };
  }
  createNote(title, note) {
    const newNote = { title, note };
    const newArrayNote = [...this.state.note, newNote];
    const newState = {
      note: newArrayNote,
    };

    this.setState(newState);
  }
  render() {
    return (
      <section className="section-container">
        <Form createNote={this.createNote.bind(this)} />
        <Notes notes={this.state.note} />
      </section>
    );
  }
}

export default App;
