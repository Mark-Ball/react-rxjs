import React, { Component } from 'react';

class UserForm extends Component {
    state = {
        email: ''
    };
    
    onSubmit = () => {
        //emit an action
    };
    
    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    
    render() {
        const { email } = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    type='text' 
                    placeholder='enter email'
                    name='email'
                    onChange={this.handleInputChange}
                    value={email}    
                />
            </form>
        )
    }
}

export default UserForm;