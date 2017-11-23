import React from 'react';

export default class RemoveAll extends React.Component {
    constructor(props) {
        super(props);
    }

    /**
     * Delete all items.
     * @param {Object} evt
     */
    deleteAllItems(evt){
        return this.props.deleteAllItems();
    }

    render() {
        return (
            <button
                className="btn btn-primary "
                className={"btn " + (this.props.isActiveBtn ? 'btn-success' : 'btn-danger') + " btn-remove-all-items"}
                disabled={!this.props.isActiveBtn}
                onClick={e=>this.deleteAllItems(e)}
                >Remove all
            </button>
        )
    }
};
