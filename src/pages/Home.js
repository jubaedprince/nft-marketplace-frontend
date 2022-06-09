import { Component } from "react";
import NftThumbnail from "../reusable/NftThumbnail";


export default class Home extends Component {
    state = {
        images: [
            {
                emoji: '🍦',
                name: 'ice cream',
                price: 5
            },
            {
                emoji: '🍩',
                name: 'donuts',
                price: 2.5,
            },
            {
                emoji: '🍉',
                name: 'watermelon',
                price: 4
            }]
    }
    render() {
        return (<div>
            <h1>Home</h1>
            {this.state.images.map(element => {
                return <NftThumbnail data={element}></NftThumbnail>
            })}
        </div>);
    }
};
