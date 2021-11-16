import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
    this.categoria = "Sem categoria"
    this.state = {
      categorias : []
    }
  }

  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias.bind(this))
    this.props.categorias.notificar(this._novasCategorias.bind(this))
  }

  _novasCategorias(categorias) {
    this.setState({...this.state, categorias})
  }

  _handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handleMudancaCategoria(evento) {
    evento.stopPropagation()
    this.categoria = evento.target.value
  }

  _handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto, this.categoria);
  }

  render() {
    return (
      <form
        onSubmit={this._criarNota.bind(this)}
        className="formulario-cadastro-form">
        <select onChange={this._handleMudancaCategoria.bind(this)} className="formulario-cadastro-categorias">
          {this.state.categorias.map((categoria, index) => {
            return <option key={index}>{categoria}</option>;
          })}
        </select>
        <input
          onChange={this._handleMudancaTitulo.bind(this)}
          type="text"
          className="formulario-cadastro-input-titulo"
          placeholder="Título"
        />
        <textarea
          onChange={this._handleMudancaTexto.bind(this)}
          className="formulario-cadastro-input-texto"
          rows={15}
          placeholder="Escreva sua nota"
        />
        <button className="formulario-cadastro-input-criar-nota">
          Criar nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
