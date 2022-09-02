import React from "react"

export default class App extends React.Component {
    state = {
        character: {}
    }
    componentDidMount() {
        fetch('https://swapi.dev/api/people/1')
            .then(response => response.json())
            .then(data => {
                this.setState({character: data})
                console.log("componentDidMount")
            })
    }
    render () {
        console.log("rendered")
        return (
            <h1>Hello, {this.state.character.name}</h1>
        )
    }
}