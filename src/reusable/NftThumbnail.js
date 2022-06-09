import { Component } from "react";

export default class NftThumbnail extends Component {
    render() {
        return (
            <div>
                <img alt="title" height="300" width="300" />
                <h3>{this.props.data.name}</h3>
                <p>{this.props.data.emoji} ETH: {this.props.data.price}</p>
                <p></p>
            </div>
        );
    }
};
