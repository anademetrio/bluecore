import React, { Component } from 'react';

export default class Page1 extends Component {
    render() {
        return (
            <div className="page1">
                <div className="question-box">
                    <h4><span>1</span>Pergunta</h4>
                </div>
                <div className="question-content">
                    <div className="form-group form-check">
                        <input type="checkbox" name="question-1" id="question-1-1" />
                        <label htmlFor="question-1-1">
                            <span className="check">
                                <i className="material-icons">check</i>
                            </span>
            Escolha 1
          </label>
                    </div>

                    <div className="form-group form-check">
                        <input type="checkbox" name="question-1" id="question-1-2" />
                        <label htmlFor="question-1-2">
                            <span className="check">
                                <i className="material-icons">check</i>
                            </span>
            Escolha 2
          </label>
                    </div>

                    <div className="form-group form-check">
                        <input type="checkbox" name="question-1" id="question-1-3" />
                        <label htmlFor="question-1-3">
                            <span className="check">
                                <i className="material-icons">check</i>
                            </span>
            Escolha 3
          </label>
                    </div>
                    <button className="btn-default">Continuar</button>
                </div>
            </div>
        );
    }
}
