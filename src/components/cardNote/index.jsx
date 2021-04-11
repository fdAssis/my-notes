import React, { Component } from 'react';

import './style.css';

class CardNote extends Component {
  render() {
    return (
      <section className="cardNote_section">
        <header className="cardNote_header">
          <h3 className="cardNote_category">Category</h3>
          <p className="cardNote_date">20/03/2021</p>
        </header>
        <p className="cardNote_note">Escreva sua nota aqui...</p>
      </section>
    );
  }
}

export default CardNote;
