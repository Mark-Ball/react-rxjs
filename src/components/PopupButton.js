import React, { Component } from 'react';
import { connect } from 'react-redux';

import { togglePopup } from '../actions'

class PopupButton extends Component {
    onClick = () => {
        this.props.togglePopup();
    };
    
    render() {
        return (
            <button onClick={this.onClick}>Popup</button>
        )
    }
}

const mapDispatchToProps = { togglePopup };

export default connect(null, mapDispatchToProps)(PopupButton);