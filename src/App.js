import React, { Component } from 'react';
import Notes from './components/notes';

export default class App extends Component {
  render() {
    return (
      <section>
        <form>
          <input />
          <textarea />
          <button>OK</button>
        </form>

        <Notes />
      </section>
    );
  }
}
