import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import TextField from 'material-ui/TextField'
import Avatar from 'material-ui/Avatar'
import FlatButton from 'material-ui/FlatButton'
import { grey100 } from 'material-ui/styles/colors'
import SearchIcon from 'material-ui/svg-icons/action/search'


const style = { margin: 5 }

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textoPesquisa: ''
        }

    }

    onChangeTextoPesquisa = (e) => {
        const valor = e.target.value
        this.setState({ textoPesquisa: valor })
    }

    render() {
        return (
            <div>
                <Toolbar>
                    <ToolbarGroup firstChild={true}>
                        <IconButton onClick={this.props.onClickHome} >
                            <SearchIcon />
                        </IconButton>
                        <FlatButton label="Minha lista" primary={true} onClick={this.props.onClickMinhaLista} />
                    </ToolbarGroup>
                    <ToolbarGroup>

                        <TextField onChange={this.onChangeTextoPesquisa} />
                        <IconButton onClick={() => this.props.onPesquisar(this.state.textoPesquisa)} ><SearchIcon /></IconButton>
                        <ToolbarSeparator />

                        <Avatar
                            backgroundColor={grey100}
                            size={30}
                            style={style}
                        >
                            A
                        </Avatar>
                    </ToolbarGroup>
                </Toolbar>
            </div>
        )
    }
}

NavBar.propTypes = {
    onClickMinhaLista: PropTypes.func.isRequired,
    onClickHome: PropTypes.func.isRequired,
    onPesquisar: PropTypes.func.isRequired,
}

export default NavBar