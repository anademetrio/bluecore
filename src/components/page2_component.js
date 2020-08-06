import React, { Component } from 'react';

export default class Page2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resposta: ''
    }
  }
  render() {
    return (
      <div className="page2">
        <div className="question-box">
          <h4><span>2</span>Pergunta</h4>
        </div>
        <div className="question-content">
          <div className="form-group form-input">
            <input type="text" onChange={(e) => this.setState({ resposta: e.target.value })} maxLength="250" placeholder="Escreva a resposta aqui" />
            <span>{this.state.resposta.length}/250</span>
          </div>
          <button className="btn-default">Continuar</button>
        </div>
      </div>
    );
  }
}
