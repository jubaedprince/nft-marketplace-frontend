
const axios = require('axios').default;

export async function createNft(data) {
    axios.post('/api/nft', {
        body: data,
    })
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });

}