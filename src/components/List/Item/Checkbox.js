import React from 'react';

export default class Checkbox extends React.Component {
    constructor(props) {
        super(props);
    }

    /**
     * Toggle checkbox.
     * @param {Object} evt
     */
    toggleCheckbox(evt){
        return this.props.toggleCheckbox();
    }

    render() {
        return (
            <div className="col-xs-1">
                <input
                    type="checkbox"
                    checked={this.props.checked}
                    onChange={e=>this.toggleCheckbox(e)}
                    />
            </div>
        );
    }
};
