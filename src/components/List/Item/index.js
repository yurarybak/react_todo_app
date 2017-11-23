import React from 'react';
import Checkbox from './Checkbox';
import Remove from './Remove';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    /**
     * Delete item.
     * @param {Object} evt
     */
    deleteItem(evt) {
        evt.preventDefault();
        return this.props.deleteItem(this.props.indexItem);
    };

    /**
     * Toggle checkbox.
     */
    toggleCheckbox() {
        return this.props.toggleItem(this.props.indexItem);
    }

    /**
     * Render.
     */
    render() {
        return (
            <li className="list-group-item row">
                <Checkbox
                    checked={this.props.item.checked}
                    toggleCheckbox={this.toggleCheckbox.bind(this)}
                    />
                <div className="col-xs-10">{this.props.item.value}</div>
                <div className="col-xs-1">
                    <Remove
                        isActiveBtn={!this.props.item.checked}
                        deleteItem={this.deleteItem.bind(this)}
                        />
                </div>
            </li>
        );
    }
};
