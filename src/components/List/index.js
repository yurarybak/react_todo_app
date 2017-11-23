import React from 'react';
import Item from './Item/';
import RemoveAll from './RemoveAll';

export default class Result extends React.Component {
    constructor(props) {
        super(props);
    }

    /**
     * Delete item by index.
     * @param {Number} idx - item's index
     */
    deleteItem(idx) {
        if (!this._confirmNumber(idx)) return true;
        return this.props.deleteItem(idx);
    }

    /**
     * When we toggle item's checkbox.
     * @param {Number} idx - item's index
     */
    toggleItem(idx) {
        if (!this._confirmNumber(idx)) return true;
        return this.props.toggleItem(idx);
    }

    /**
     * Functionality for show or not
     * remove all items button.
     * @returns {Boolean}
     */
    isShowRemoveAllButton() {
        return (this.props.getItemsCount()) ? true : false;
    }

    /**
     * Functionality for remove all item.
     */
    deleteAllItems() {
        return this.props.deleteAllItems();
    }

    /**
     * Here we check all items.
     * If we have all items in list checked
     * then button remove All isn't active.
     * @returns {Boolean}
     */
    checkCheckedItems() {
        return this.props.items.some(item => {
            return (!item.checked)
        })
    }

    /**
     * Show all items.
     * @returns {Object}
     */
    showItems() {
        return this.props.items.map((item, idx) =>
                <Item
                    item={item}
                    indexItem={idx}
                    deleteItem={this.deleteItem.bind(this)}
                    toggleItem={this.toggleItem.bind(this)}
                    />
        )
    }

    /**
     * Show remove all button.
     * @returns {Object}
     */
    showRemoveAllBtn() {
        return <div className="col-md-2">
                    <RemoveAll
                        deleteAllItems={this.deleteAllItems.bind(this)}
                        isActiveBtn={this.checkCheckedItems()}
                    />
                </div>
    }

    /**
     * Confirm type.
     * @param {Number} number
     * @returns {Boolean}
     */
    _confirmNumber(number) {
        return typeof number === 'number' && !isNaN(Number(number));
    }

    /**
     * Render.
     */
    render() {
        return (
            <div className="row">
                <div className="col-md-10">
                    <ul className="list-group">
                        {this.showItems()}
                    </ul>
                </div>
                {(this.isShowRemoveAllButton()) ? this.showRemoveAllBtn() : null}
            </div>
        );
    }
};
