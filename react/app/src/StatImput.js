import React, { Component } from 'react'

class StatImput extends Component {

    constructor(props) {
        super(props)
        this.state = {name: ''}
        setTimeout(() => this.setState({name: 'JoãZinho'}), 1000)    
    }

    render() {
        return(
            <div>
                <input type="text" name="name" value={this.state.name} />
            </div>
        )
    }
}

export default StatImput