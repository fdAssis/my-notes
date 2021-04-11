import React, { Component } from 'react';

// Components ---- ./src/components
import CardNote from '../cardNote';

import './style.css';

class Notes extends Component {
  render() {
    return (
      <ul className="note_ul">
        {Array.of(
          'Estudo',
          'Trabalho',
          'Estudo',
          'Trabalho',
          'Estudo',
          'Trabalho',
          'Estudo',
          'Estudo',
          'Trabalho',
          'Estudo',
          'Trabalho',
          'Estudo'
        ).map((category) => {
          return (
            <li className="note_li">
              <CardNote />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Notes;
