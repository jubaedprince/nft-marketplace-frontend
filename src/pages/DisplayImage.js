import React, { Component } from "react";
import { Buffer } from "buffer";
import { createNft } from '../services/NftServices';
const ipfs = require('ipfs-http-client');

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


    };



    addImage = async (file) => {
        // connect to local ipfs node
        const client = ipfs.create("http://localhost:5001")
        return await client.add(file).then(result => {
            console.log(result)
            return (result)
        })

    }

    addMetaData = async (data) => {
        // connect to local ipfs node
        const client = ipfs.create("http://localhost:5001")
        return await client.add({ content: Buffer.from(JSON.stringify(data)) }).then(result => {
            console.log(result)
            return (result)
        })

    }

    onSubmit = async event => {
        event.preventDefault()
        const file = event.target[0].files[0]
        this.addImage(file).then(result => {
            console.log('result')
            console.log(result)
            this.setState({ image: result })
            console.log(this.state)
            createNft(this.state)
        })
        // await this.addMetaData(this.state)


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