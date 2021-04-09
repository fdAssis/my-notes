import React, { Component } from 'react';

// Components ---- ./src/components
import CardNote from './cardNote';

class Notes extends Component {
  render() {
    return (
      <ul>
        <li>
          <CardNote />
        </li>
      </ul>
    );
  }
}

export default Notes;
