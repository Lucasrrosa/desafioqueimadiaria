import React, { Component } from 'react'
import './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import PaginaTotal from './components/PaginaTotal'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      minhaLista: [],
      mostrarLista: false,
    }
    this.adicionarFilme = this.adicionarFilme.bind(this)
    this.onClickHome = this.onClickHome.bind(this)
    this.onClickMinhaLista = this.onClickMinhaLista.bind(this)
    this.onPesquisar = this.onPesquisar.bind(this)
  }

  adicionarFilme = (filme) => {
    const minhaLista = this.state.minhaLista
    if (minhaLista.length === 0 && (minhaLista.filter(f => (filme.id === f.id)).length === 0)) {
      minhaLista.push(filme)
    }
    this.setState({ minhaLista })
  }

  onClickMinhaLista = () => this.setState({ mostrarLista: true, mostrarPesquisa: false })
  onClickHome = () => this.setState({ mostrarLista: false, mostrarPesquisa: false })
  onPesquisar = () => {
    this.setState({ mostrarLista: false, mostrarPesquisa: true })
  }


  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
          <PaginaTotal
            minhaLista={this.state.minhaLista}
            mostrarLista={this.state.mostrarLista}
            mostrarPesquisa={this.state.mostrarPesquisa}
            onClickMinhaLista={this.onClickMinhaLista}
            onClickHome={this.onClickHome}
            onPesquisar={this.onPesquisar}
            adicionarFilme={this.adicionarFilme}
          />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
