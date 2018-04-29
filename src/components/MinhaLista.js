import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CardFilme from './CardFilme'

class MinhaLista extends Component {
    render() {
        const { listaFilmes } = this.props
        return (
            <div>
                {listaFilmes.map(filme => (<CardFilme key={filme.id} filme={filme} />))}
            </div>
        )
    }
}

MinhaLista.propTypes = {
    listaFilmes: PropTypes.array.isRequired
}

export default MinhaLista