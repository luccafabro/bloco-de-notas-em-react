import React, { Component } from "react";
import "./estilo.css";

class CardNota extends Component {

  constructor() {
    super()
  }

  apagar() {
    const indice = this.props.indice;
    this.props.apagarNota(indice);
  }

  render() {
    return (
      <section className="card-nota">
        <header>
          <h1 className="card-nota-categoria">{this.props.categoria}</h1>
          <h3 className="card-nota-titulo">{this.props.titulo}</h3>
        </header>
        <p className="card-nota-conteudo">{this.props.texto}</p>
        <div onClick={this.apagar.bind(this)} className="card-nota-deletar">
          deletar
        </div>
      </section>
    );
  }
}

export default CardNota;
