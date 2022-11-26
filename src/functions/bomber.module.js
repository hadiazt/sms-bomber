const axios = require('axios')
const color = require('chalk')

module.exports = ({ number }) => {

    const validate = number.search(/^9\d{9}$/i);
    if (validate !== 0) return console.log("Invalid Format");

    require('../routes.js').API({ number })

    setInterval(function () {
        for (let num = 0; num < list.length; num++) {
            const API = list[num];

            if (!API.headers) {
                var headers = {}
            } else {
                var headers = API.headers;
            }

            if (API.method == "POST") {
                axios.post(API.url, API.data, headers).then(function () {
                    console.log(color.green('Request From ' + API.name + " Sent"));
                }).catch(error => {
                    console.log(color.red("ERROR :\n" + error));
                })
            } else {
                axios.get(API.url.headers).then(function () {
                    console.log(API.name);
                }).catch(error => {
                    console.log(color.red("ERROR :\n" + error));
                })
            }
        }
    }, 1000);
}