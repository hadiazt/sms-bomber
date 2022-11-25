// const axios = require('axios')
// const color = require('chalk')

module.exports = ({ number }) => {

    const validate = number.search(/^9\d{9}$/i);
    if (validate !== 0) return console.log("Invalid Format");

    require('../routes.js').API({ number })

    setInterval(function () {
        for (let num = 0; num < list.length; num++) {
            const API = list[num];
            console.log(API);
        }
        // }, 30000);
    }, 1000);

}