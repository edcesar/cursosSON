import React, { Component } from 'react'
import StatImput from './StatImput'

class HelloWord extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'João da Silva',
            txt: this.props.txt
        }
    }

    render() {
        const style = {
            color: 'yellow',
            fontSize: 20,
            backgroundColor: '#000'
            
        }

        return(
            <div className="my-class-from-react">
                <StatImput />
                <h1 style={style} >{this.state.txt}</h1>
                <span>{this.state.name}</span>
            </div>
        )
    }

}

export default HelloWord
