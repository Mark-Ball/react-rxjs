import React, { Component } from 'react';
import { connect } from 'react-redux';

import { showPopup } from '../actions'

class PopupButton extends Component {
    onClick = () => {
        this.props.showPopup();
    };
    
    render() {
        return (
            <button onClick={this.onClick}>Popup</button>
        )
    }
}

const mapDispatchToProps = { showPopup };

export default connect(null, mapDispatchToProps)(PopupButton);