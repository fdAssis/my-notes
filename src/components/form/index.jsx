import React, { Component } from 'react';

import './style.css';

class Form extends Component {
  render() {
    return (
      <form className="form-add-note">
        <input
          className="form-add-note_input"
          type="text"
          placeholder="Titulo da nota"
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
