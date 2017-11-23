import React from 'react';

export default class Checkbox extends React.Component {
    constructor(props) {
        super(props);
    }

    /**
     * When we click by button.
     * @param {Object} evt
     */
    handleClick(evt){
        return this.props.deleteItem(evt)
    }

    /**
     * Render.
     */
    render() {
        return (
            <button
                disabled={!this.props.isActiveBtn}
                type="button"
                className="btn"
                onClick={e=>this.handleClick(e)}
                ><i className="glyphicon glyphicon-remove"></i>
            </button>
        );
    }
};
