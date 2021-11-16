import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas/index.js";
import FormularioCadastro from "./components/FormularioCadastro/index.js";
import ListaDeCategorias from "./components/ListaDeCategorias/index.js";
import "./assets/App.css";
import ArrayDeNotas from "./dados/Notas.js";
import Categorias from "./dados/Categorias.js";

class App extends Component {
  constructor() {
    super();

    this.notas = new ArrayDeNotas();
    this.categorias = new Categorias();
    this.categorias.adicionarCategorias("Sem categoria")
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.categorias}
          criarNota={this.notas.adicionarNota.bind(this.notas)}
        />
        <main>
          <ListaDeCategorias
            adicionarCategoria={this.categorias.adicionarCategorias.bind(
              this.categorias
            )}
            categorias={this.categorias}
          />
        </main>
        <ListaDeNotas
          categorias={this.categorias}
          apagarNota={this.notas.apagarNota.bind(this.notas)}
          notas={this.notas}
        />
      </section>
    );
  }
}

export default App;
