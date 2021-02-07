import { computeHeadingLevel } from '@testing-library/react';
import React, { Component } from 'react'
import Button from '@material-ui/core/Button';


class DashBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: [],
            message: ''
        }
    }
    handleChange = (event) => {
        this.setState({
            message: event.target.value
        });
    }
    handleSubmit = (event) => {
        // console.log(event.target.value)
        this.setState({
            messages: this.state.message
        });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>Chat Application</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="message" value={this.state.message} onChange={this.handleChange} />
                    <Button type='submit'>Send</Button>
                </form>
            </div>
        )
    }
}

export default DashBoard