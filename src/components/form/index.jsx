import React, { Component } from 'react';

import './style.css';

class Form extends Component {
  constructor() {
    super();
    this.title = '';
  }

  handleSetTitle(event) {
    this.title = event.target.value;
    console.log(this.title);
  }
  render() {
    return (
      <form className="form-add-note">
        <input
          className="form-add-note_input"
          type="text"
          placeholder="Titulo da nota"
          onChange={this.handleSetTitle.bind(this)}
        />

        <textarea
          className="form-add-note_textarea"
          placeholder="Escreva sua nota aqui..."
        />

        <button className="form-add-note_button">Adicionar nota</button>
      </form>
    );
  }
}

export default Form;
