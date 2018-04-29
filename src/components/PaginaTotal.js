import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavBar from './NavBar'
import FilmeInicial from './FilmeInicial'
import CarouselFilmes from './CarouselFilmes'
import MinhaLista from './MinhaLista'
import ResultPesquisa from './ResultPesquisa'
import axios from 'axios'

class PaginaTotal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filmesAcao: [],
            filmesAventura: [],
            filmesAnimacao: [],
            filmesComedia: [],
            resultPesquisa: []
        }
        this.onPesquisar = this.onPesquisar.bind(this)
    }

    getAcao = () => {
        const url = `https://api.themoviedb.org/3/genre/28/movies?api_key=86d1125ccb0322db2ce9defa20d64597&language=pt-BR&include_adult=false&sort_by=created_at.asc`
        axios
            .get(url)
            .then((res) => {
                this.setState({ filmesAcao: res.data.results })
            })
    }

    getAventura = () => {
        const url = `https://api.themoviedb.org/3/genre/12/movies?api_key=86d1125ccb0322db2ce9defa20d64597&language=pt-BR&include_adult=false&sort_by=created_at.asc`
        axios
            .get(url)
            .then((res) => {
                this.setState({ filmesAventura: res.data.results })
            })
    }

    getAnimacao = () => {
        const url = `https://api.themoviedb.org/3/genre/16/movies?api_key=86d1125ccb0322db2ce9defa20d64597&language=pt-BR&include_adult=false&sort_by=created_at.asc`
        axios
            .get(url)
            .then((res) => {
                this.setState({ filmesAnimacao: res.data.results })
            })
    }

    getComedia = () => {
        const url = `https://api.themoviedb.org/3/genre/35/movies?api_key=86d1125ccb0322db2ce9defa20d64597&language=pt-BR&include_adult=false&sort_by=created_at.asc`
        axios
            .get(url)
            .then((res) => {
                this.setState({ filmesComedia: res.data.results })
            })
    }

    onPesquisar = (textoPesquisa) => {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=86d1125ccb0322db2ce9defa20d64597&language=pt-BR&query=${
            textoPesquisa.replace(/ /g, '%20')}&page=1&include_adult=false`
        this.props.onPesquisar()
        axios.get(url)
            .then((res) => this.setState({ resultPesquisa: res.data.results }))
    }

    componentDidMount() {
        this.getAcao()
        this.getAnimacao()
        this.getAventura()
        this.getComedia()
    }


    render() {
        return (
            <div>
                <NavBar
                    onClickMinhaLista={() => {
                        this.props.onClickMinhaLista()
                    }}
                    onClickHome={() => {
                        this.props.onClickHome()
                        this.getAcao()
                        this.getAnimacao()
                        this.getAventura()
                        this.getComedia()
                    }}
                    onPesquisar={this.onPesquisar}
                />
                {!this.props.mostrarLista && !this.props.mostrarPesquisa &&
                    <div>
                        <FilmeInicial
                            idFilme={299536}
                            adicionarFilme={this.props.adicionarFilme}
                        />
                        {this.state.filmesAcao.length > 0 &&
                            <CarouselFilmes
                                genero="Ação"
                                filmes={this.state.filmesAcao}
                                adicionarFilme={this.props.adicionarFilme}
                            />
                        }
                        {this.state.filmesAventura.length > 0 &&
                            <CarouselFilmes
                                genero="Aventura"
                                filmes={this.state.filmesAventura}
                                adicionarFilme={this.props.adicionarFilme}
                            />
                        }
                        {this.state.filmesAventura.length > 0 &&
                            <CarouselFilmes
                                genero="Animação"
                                filmes={this.state.filmesAnimacao}
                                adicionarFilme={this.props.adicionarFilme}
                            />
                        }
                        {this.state.filmesComedia.length > 0 &&
                            <CarouselFilmes
                                genero="Comédia"
                                filmes={this.state.filmesComedia}
                                adicionarFilme={this.props.adicionarFilme}
                            />
                        }
                    </div>
                }
                {this.props.mostrarLista && !this.props.mostrarPesquisa &&
                    <MinhaLista
                        listaFilmes={this.props.minhaLista}
                    />
                }
                {!this.props.mostrarLista && this.props.mostrarPesquisa && this.state.resultPesquisa.length > 0 &&
                    <ResultPesquisa
                        filmes={this.state.resultPesquisa}
                        adicionarFilme={this.props.adicionarFilme}
                    />
                }
            </div>
        );
    }
}

PaginaTotal.propTypes = {
    minhaLista: PropTypes.array.isRequired,
    mostrarLista: PropTypes.bool.isRequired,
    mostrarPesquisa: PropTypes.bool.isRequired,
    onClickMinhaLista: PropTypes.func.isRequired,
    adicionarFilme: PropTypes.func.isRequired,
    onClickHome: PropTypes.func.isRequired,
    onPesquisar: PropTypes.func.isRequired,
}

export default PaginaTotal