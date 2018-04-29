import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GridTile from 'material-ui/GridList/GridTile'
import IconButton from 'material-ui/IconButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import { grey100 } from 'material-ui/styles/colors'

class FilmeGridList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mouseOver: false
        }
    }

    render() {
        const { filme } = this.props
        return (
            <GridTile
                style={{
                    width: this.state.mouseOver ? 300 : 200,
                    height: this.state.mouseOver ? 375 : 250,
                }}
                zDepth={5}
                onMouseOver={() => this.setState({ mouseOver: true })}
                onMouseOut={() => this.setState({ mouseOver: false })}
                title={filme.title}
                key={filme.id}
                subtitle={<span style={{ display: 'inline-block', }} >{filme.overview}</span>}
                actionIcon={
                    <IconButton onClick={() => this.props.adicionarFilme(filme)} tooltip="Adicionar à lista"><ContentAdd color={grey100} /></IconButton>
                }
            >
                <img src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`} alt="" />
                {/* <CardFilme/> */}
            </GridTile>
        )
    }
}

FilmeGridList.propTypes = {
    filme: PropTypes.object.isRequired,
    adicionarFilme: PropTypes.func.isRequired
}

export default FilmeGridList