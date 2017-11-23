import React from 'react';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    /**
     * Render.
     */
    render() {
        return (
            <button
                className={this.props.isActiveBtn ? 'btn btn-success' : 'btn btn-danger'}
                disabled={!this.props.isActiveBtn}
                >{this.props.btnName}
            </button>
        )
    }
};
