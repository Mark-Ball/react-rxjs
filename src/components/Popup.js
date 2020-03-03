import React, { Component } from 'react';

class Popup extends Component {
    render() {
        const { text } = this.props;

        return (
            <div>
                {text}
            </div>
        )
    }
}

export default Popup;