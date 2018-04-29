import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import CardTitle from 'material-ui/Card/CardTitle'
import CardMedia from 'material-ui/Card/CardMedia'
import { grey100 } from 'material-ui/styles/colors'
import IconButton from 'material-ui/IconButton'
import ContentAdd from 'material-ui/svg-icons/content/add'


class CardFilme extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mouseOver: false,
        }
    }

    onMouseOut = () => this.setState({ mouseOver: false })

    onMouseOver = () => this.setState({ mouseOver: true })


    render() {
        const { filme } = this.props
        return (
            <Paper
                style={{
                    height: this.state.height,
                    width: this.state.mouseOver ? 300 : 150,
                    margin: 20,
                    textAlign: 'center',
                    display: 'inline-block',
                }}
                zDepth={this.state.mouseOver ? 3 : 1}
                onMouseOver={this.onMouseOver}
                onMouseOut={this.onMouseOut}
            >
                <CardMedia
                    overlay={
                        <div>
                            <CardTitle
                                title={this.state.mouseOver ? filme.title : ''}
                                subtitle={this.state.mouseOver ? filme.overview.slice(0, 300) : ''}
                                subtitleColor={grey100}
                                titleColor={grey100}

                            />
                            {this.props.isResultPesquisa &&
                                <IconButton
                                    onClick={() => this.props.adicionarFilme(filme)}
                                    style={{
                                        position: 'right'
                                    }}
                                >
                                    <ContentAdd color={grey100} />
                                </IconButton>
                            }

                        </div>
                    }
                >
                    <img src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`} alt="" />
                </CardMedia>
            </Paper>
        )
    }
}

CardFilme.propTypes = {
    filme: PropTypes.object.isRequired,
    adicionarFilme: PropTypes.func,
    isResultPesquisa: PropTypes.boolean,
}

export default CardFilme