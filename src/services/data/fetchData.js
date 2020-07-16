const axios = require('axios');

const fetchData = () => {

    axios.get('http://localhost:3000/data.json').then(function (response) {
        // handle success
        console.log(response);
    })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}
export default fetchData