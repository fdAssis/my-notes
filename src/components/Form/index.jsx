import React, { Component } from 'react';

import './style.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.title = '';
    this.note = '';
  }

  _handleSetTitle(event) {
    event.stopPropagation();
    this.title = event.target.value;
  }

  _handleSetNote(event) {
    event.stopPropagation();
    this.note = event.target.value;
  }

  _handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    this.props.createNote(this.title, this.note);
  }

  render() {
    return (
      <form className="form-add-note" onSubmit={this._handleSubmit.bind(this)}>
        <input
          className="form-add-note_input"
          type="text"
          placeholder="Titulo da nota"
          onChange={this._handleSetTitle.bind(this)}
        />

        <textarea
          className="form-add-note_textarea"
          placeholder="Escreva sua nota aqui..."
          onChange={this._handleSetNote.bind(this)}
        />

        <button className="form-add-note_button">Adicionar nota</button>
      </form>
    );
  }
}

export default Form;
