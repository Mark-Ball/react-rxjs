import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setUserEmail } from '../actions';
import Popup from './Popup';

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
        const { showPopup } = this.props;
        const { email } = this.state;

        return (
            <>
                {showPopup && <Popup text={'Warning'}/>}
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
            </>
        )
    }
}

const mapStateToProps = state => {
    const { showPopup } = state.popup;
    return { showPopup }
};

const mapDispatchToProps = {
    setUserEmail
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);