import React, { Component } from 'react';

import './style.css';

import { ReactComponent as DeleteSVG } from '../../assets/img/trash.svg';

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

  deleteNote() {
    this.props.delete(this.props.index);
  }

  render() {
    return (
      <section className="cardNote_section">
        <header className="cardNote_header">
          <h3 className="cardNote_category">{this.props.title}</h3>
          <span className="cardNote_date">{this.dateFormated}</span>
        </header>
        <p className="cardNote_note">{this.props.note}</p>
        <DeleteSVG
          onClick={this.deleteNote.bind(this)}
          className="cardNote_SVG"
        />
      </section>
    );
  }
}

export default CardNote;
