import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";

class ListaDeNotas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notas : []
    }
  }

  componentDidMount() {
    this.props.notas.inscrever(this._novasNotas.bind(this))
  }

  _novasNotas(notas) {
    this.setState({...this.state, notas})
  }

  render() {
    return (
      <ul className="lista-notas-nota">
        {/*
          Criando um array que em cada cada elemento é uma categoria
          e gera uma nota
        */}
        {this.state.notas.map((nota, index) => {
          return (
            <li key={index} className="lista-notas-item">
              <CardNota
                indice={index}
                apagarNota={this.props.apagarNota}
                categoria={nota.categoria}
                titulo={nota.titulo}
                texto={nota.texto}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
