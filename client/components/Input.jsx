import React, { Component } from "react";

class Input extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // Unsure how to hard code '{' and '}' so this is the workaround
        document.getElementById('topForm').innerText='div: {';
        document.getElementById('bottomForm').innerText='}';
    }

    handle(event) {
        // Stop page from refreshing
        event.preventDefault();
        let textInput = event.target[0].value
        console.log('input:', textInput);
        console.log('handling event:', event);
        document.getElementById('console_input').value = '';
        this.props.userInputCB(textInput);
    }

    render() {
        //&#123
        return (
        <form onSubmit={this.handle.bind(this)}>
            <p id="topForm">div: </p>
            <input id="console_input" type="text" autoComplete="off"></input>
            <p id="bottomForm"></p>
        </form>)
    }
}

export default Input;