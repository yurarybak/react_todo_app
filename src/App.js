import React from 'react';
import Form from './components/Form/';
import List from './components/List/';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    };

    /**
     * Get item.
     * @param {string} item
     */
    getItem(item){
        if(!(item && typeof item === 'string')) return true;
        return this.addItemToState(item);
    }

    /**
     * Get items from state.
     * @returns {Array}
     */
    getItems(){
        return this.state.items;
    }

    /**
     * Add item to state.
     * @param {string} item
     */
    addItemToState(item){
        if(!(item && typeof item === 'string')) return true;
        let itemConfig = this.createItemConfig(item);
        let items = this.getItems();
        items.push(itemConfig);
        return this.createState(items);
    }

    /**
     * Create item config.
     * @param {string} item
     * @returns {Object}
     */
    createItemConfig(item){
        return ({
            value: item,
            checked: false
        })
    }

    /**
     * Delete item from state.
     * @param {Number} idx - item's index
     */
    deleteItem(idx){
        if (!this._confirmNumber(idx)) return true;
        let items = this.getItems();
        items.splice(idx, 1);
        return this.createState(items);
    }

    /**
     * Delete all items.
     */
    deleteAllItems(){
        let items = this.getItems();
        let filteredItems = items.filter(item => {
            return (item.checked)
        });
        return this.createState(filteredItems);
    }

    /**
     * When we click checkbox on item list.
     * We change "checked" params for item in state.
     * @param {Number} idx - item's index
     */
    toggleItem(idx){
        if (!this._confirmNumber(idx)) return true;
        return this.changeCheckedValueForItem(idx)
    }

    /**
     * Change "checked" params for item in state.
     * @param {Number} idx - item's index
     */
    changeCheckedValueForItem(idx){
        let items = JSON.parse(JSON.stringify(this.state.items));
        items[idx].checked = !items[idx].checked;
        return this.createState(items);
    }

    /**
     * Create state.
     * @param {Array} items
     */
    createState(items){
        this.setState({
            items
        })
    }

    /**
     * Get number of length items.
     * @returns {Number}
     */
    getItemsCount(){
        let items = this.getItems();
        return items.length;
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
                <Form
                    getItem={this.getItem.bind(this)}
                    getItemsCount={this.getItemsCount.bind(this)}
                    />
                <List
                    items={this.getItems()}
                    deleteItem={this.deleteItem.bind(this)}
                    toggleItem={this.toggleItem.bind(this)}
                    deleteAllItems={this.deleteAllItems.bind(this)}
                    getItemsCount={this.getItemsCount.bind(this)}
                    />
            </div>
        )
    };
}