import React from "react";

import "./style.css";

export class Counter extends React.Component {
  constructor() {
    super();
    this.state = { contador: 0, nome: "", senha: "" };
  }

  render() {
    return (
      <div id="caixa">
        <div>
          <h1>{this.state.contador}</h1>
          <button
            onClick={() => {
              this.setState({ contador: this.state.contador + 1 });
            }}
          >
            Diminuir
          </button>
          <button
            onClick={() => {
              this.setState({ contador: this.state.contador - 1 });
            }}
          >
            Aumentar
          </button>
        </div>
        <form id="form-caixa">
          <label htmlFor="iNome">Nome:</label>
          <input
            type="text"
            id="iNome"
            value={this.state.nome}
            placeholder="Digite o nome"
            onChange={(event) => {
              this.setState({ nome: event.target.value });
            }}
          />

          <label htmlFor="iSenha">Senha:</label>
          <input
            type="password"
            id="iSenha"
            value={this.state.senha}
            placeholder="Digite a senha"
            onChange={(event) => {
              this.setState({ senha: event.target.value });
            }}
          />
          <button>Enviar</button>
        </form>
      </div>
    );
  }
}
