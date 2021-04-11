import React, { Component } from 'react';

// Components ---- ./src/components
import CardNote from '../cardNote';

import './style.css';

class Notes extends Component {
  render() {
    return (
      <ul className="note_ul">
        {this.props.notes.map((note, index) => {
          return (
            <li key={index} className="note_li">
              <CardNote title={note.title} note={note.note} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Notes;
