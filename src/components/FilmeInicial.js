import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import axios from 'axios'
import FlatButton from 'material-ui/FlatButton'

class FilmeInicial extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filme: false
        }
    }

    getFilmes = (idFilme) => {
        const url = `https://api.themoviedb.org/3/movie/${idFilme}?api_key=86d1125ccb0322db2ce9defa20d64597`
        axios
            .get(url)
            .then((res) => {
                this.setState({ filme: res.data })
            })
    }

    componentDidMount() {
        this.getFilmes(this.props.idFilme)
    }

    render() {
        return (
            <div>
                {this.state.filme &&
                    <Card>
                        <CardMedia>
                            <img src={`https://image.tmdb.org/t/p/w500${this.state.filme.backdrop_path}`} alt="" />
                        </CardMedia>
                        <CardTitle title={this.state.filme.title} subtitle={this.state.filme.tagline} />
                        <CardText>
                            {this.state.filme.overview}
                        </CardText>
                        <CardActions>
                            <FlatButton label="Adicionar à lista" onClick={() => { this.props.adicionarFilme(this.state.filme) }} />
                        </CardActions>
                    </Card>
                }
            </div>
        )
    }
}

FilmeInicial.propTypes = {
    idFilme: PropTypes.number.isRequired,
    adicionarFilme: PropTypes.func.isRequired
}

export default FilmeInicial