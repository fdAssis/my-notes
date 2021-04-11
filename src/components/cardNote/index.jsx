import React, { Component } from 'react';

import './style.css';

class CardNote extends Component {
  constructor(props) {
    super(props);
    this.date = new Date();
    this.dateFormated = `${this.date.getDate()}-
                         ${this.date.getMonth() + 1}-
                         ${this.date.getFullYear()} / 
                         ${this.date.getHours()}:
                         ${this.date.getMinutes()}`;
  }

  render() {
    return (
      <section className="cardNote_section">
        <header className="cardNote_header">
          <h3 className="cardNote_category">{this.props.title}</h3>
          <span className="cardNote_date">{this.dateFormated}</span>
        </header>
        <p className="cardNote_note">{this.props.note}</p>
      </section>
    );
  }
}

export default CardNote;
