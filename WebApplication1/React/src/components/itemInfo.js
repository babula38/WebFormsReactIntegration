import React, { Component } from "react";

class ItemInfo extends Component {
    componentWillReceiveProps(props) {
        //this.setState({ isChecked: props.isChecked });
        //Console.log('Chile');
    };
    render() {
        return (
            <div>
                <label>{this.props.item.Name}:</label> ${this.props.item.Price}
            </div>
        );
    }
}

export default ItemInfo;