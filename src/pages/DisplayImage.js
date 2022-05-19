import React, { Component } from "react";
import { createNft } from '../services/NftServices';

class DisplayImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            title: "",
            description: "",
            price: "",
            royalty: "",
            request_data: null,
        };

        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    handleChange = event => {
        // console.log(event.target.name)
        this.setState({ ...this.state, [event.target.name]: event.target.value })
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            this.setState({
                image: URL.createObjectURL(img)
            });
        }
    };

    onSubmit = event => {
        event.preventDefault()
        console.log(this.state)
        createNft(this.state)
    }

    render() {
        return (
            <div>
                <form id="nft_form" onSubmit={this.onSubmit}>
                    <div>
                        <img alt="NFT" src={this.state.image} />
                        <h1>Select Image</h1>
                        <input type="file" name="image" onChange={this.handleChange} />
                    </div>
                    Title: <input onChange={this.handleChange} type="text" name="title"></input><br></br>
                    Description: <input onChange={this.handleChange} type="text" name="description"></input><br></br>
                    Price: <input onChange={this.handleChange} type="text" name="price"></input><br></br>
                    Royalty: <input onChange={this.handleChange} type="text" name="royalty"></input>
                    <button type="submit">Upload</button>
                </form>
            </div>
        );
    }
}
export default DisplayImage;