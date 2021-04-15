import React, { Component } from 'react';

// Components ---- ./src/components
import Notes from './components/Notes';
import Form from './components/Form';

import './assets/app.css';
import './assets/index.css';

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

  deleteNote(index) {
    console.log({ index });
    let arrayNotes = this.state.note;
    arrayNotes.splice(index, 1);
    this.setState({ note: arrayNotes });
  }

  render() {
    return (
      <section className="section-container">
        <Form createNote={this.createNote.bind(this)} />
        <Notes delete={this.deleteNote.bind(this)} notes={this.state.note} />
      </section>
    );
  }
}

export default App;
