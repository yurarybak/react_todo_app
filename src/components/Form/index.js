import React from 'react';
import Add from './Add';

const btnName = 'Add';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        };
    }

    /**
     * Set state when user input data.
     * @param {Object} evt
     */
    handleChange(evt) {
        this.setState({
            name: evt.target.value
        });
    }

    /**
     * Validate state. If we have not empty input or less than 5 items
     * then button is not disabled.
     */
    validator() {
        return (this.state.name && this.checkItemsCount());
    }

    /**
     * Here we check items count.
     * When we have more than 5 items
     * then button is disabled.
     * @returns {Boolean}
     */
    checkItemsCount(){
        const maxCountItem = 5;
        let itemsCount = this.props.getItemsCount();
        return (itemsCount < maxCountItem);
    }

    /**
     * When we click btn Add.
     * @param {Object} evt
     */
    handleSubmit(evt) {
        evt.preventDefault();
        this.props.getItem(this.state.name);
        this.setState({
            name: ''
        });
        this.validator();
    };

    /**
     * Render.
     */
    render() {
        return (
            <form onSubmit={e=>this.handleSubmit(e)}>
                <div className="col-xs-4">
                    <input
                          className="form-control"
                          type="text"
                          placeholder="Insert new item..."
                          value={this.state.name}
                          onChange={e=>this.handleChange(e)}
                          disabled={!this.checkItemsCount()}
                        />
                </div>
                <div className="col-xs-2">
                    <Add
                        btnName={btnName}
                        isActiveBtn={this.validator()}
                        />
                </div>
            </form>
        );
    }
};
