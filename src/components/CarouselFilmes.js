import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { GridList, GridTile } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import { grey100 } from 'material-ui/styles/colors'
import axios from 'axios'
import FilmeGridList from './FilmeGridList'

const generos = [
    { id: 28, name: 'Ação' },
    { id: 12, name: 'Aventura' },
    { id: 16, name: 'Animação' },
    { id: 35, name: 'Comédia' }
]

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
        height: 400,
    },
    titleStyle: {
        color: 'rgb(0, 188, 212)',
    },
}

class CarouselFilmes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filmes: []
        }
    }

    getFilmes = (genero) => {
        const generoId = generos.filter((item) => (genero === item.name))
        const url = `https://api.themoviedb.org/3/genre/${generoId[0].id}/movies?api_key=86d1125ccb0322db2ce9defa20d64597&language=pt-BR&include_adult=false&sort_by=created_at.asc`
        axios
            .get(url)
            .then((res) => {
                this.setState({ filmes: res.data.results })
            })
    }

    componentDidMount() {
        this.getFilmes(this.props.genero)
    }

    render() {
        const { filmes } = this.props
        return (
            <div style={styles.root} >
                <h1>{this.props.genero}</h1>
                {/* {this.state.filmes.length > 0 && */}
                <GridList style={styles.gridList}>
                    {
                        filmes.map(filme => (
                            <FilmeGridList
                                key={filme.id}
                                filme={filme}
                                adicionarFilme={this.props.adicionarFilme}
                            />)
                        )
                    }
                </GridList>
                {/* } */}
            </div>
        )
    }
}

CarouselFilmes.propTypes = {
    genero: PropTypes.string.isRequired,
    filmes: PropTypes.array.isRequired,
    adicionarFilme: PropTypes.func.isRequired
}

export default CarouselFilmes