import React, { Component } from 'react';

// Components ---- ./src/components
import CardNote from '../cardNote';

class Notes extends Component {
  render() {
    return (
      <ul>
        {Array.of('Trabalho', 'Estudo', 'Trabalho', 'Estudo').map(
          (category) => {
            return (
              <li>
                <header>
                  <h3>{category}</h3>
                  <p>20/03/2021</p>
                </header>
                <CardNote />
              </li>
            );
          }
        )}
      </ul>
    );
  }
}

export default Notes;
