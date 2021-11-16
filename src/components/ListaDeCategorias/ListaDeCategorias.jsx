import React, { Component } from "react";
import "./estilo.css";

class ListaDeCategorias extends Component {
    
  constructor() {
    super()
    this.state = {
      categorias : ["Sem categoria"] // Menu das categorias
    }
  }

  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias.bind(this))
  }

  _novasCategorias(categorias) {
    this.setState({...this.state, categorias})
  }

  _handleEventoInput(e) {
    if (e.key == "Enter") {
      let valorCategoria = e.target.value;
      if (valorCategoria != "" && valorCategoria != "Sem categoria") {
        {
          this.props.adicionarCategoria(valorCategoria);
        }
      }
    }
  }

  render() {
    return (
      <section className="lista-categoria-bloco">
        <ul className="lista-categoria-lista">
          {this.state.categorias.map((categoria, index) => {
            return (
              <li key={index} className="lista-categoria-bloquinho">
                {categoria}
              </li>
            );
          })}
        </ul>
        <input
          onKeyUp={this._handleEventoInput.bind(this)}
          className="lista-categoria-input"
          type="text"
          placeholder="Adicionar Categoria"
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
