import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CardFilme from './CardFilme'

class ResultPesquisa extends Component {
    render() {
        const { filmes } = this.props
        return (
            <div>
                {filmes.map(filme => (<CardFilme key={filme.id} isResultPesquisa adicionarFilme={this.props.adicionarFilme} filme={filme} />))}
            </div>
        )
    }
}

ResultPesquisa.propTypes = {
    filmes: PropTypes.array.isRequired,
    adicionarFilme: PropTypes.func,
}

export default ResultPesquisa