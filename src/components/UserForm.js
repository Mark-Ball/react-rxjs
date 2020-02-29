import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setUserEmail } from '../actions';

class UserForm extends Component {
    state = {
        email: ''
    };
    
    onSubmit = event => {
        event.preventDefault();
        const { email } = this.state;
        this.props.setUserEmail(email);
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
                <input type='submit' />
            </form>
        )
    }
}

const mapDispatchToProps = {
    setUserEmail
};

export default connect(null, mapDispatchToProps)(UserForm);