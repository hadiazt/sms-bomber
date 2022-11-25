// const axios = require('axios')
// const color = require('chalk')

module.exports = ({ number }) => {

    const validate = number.search(/^9\d{9}$/i);
    if (validate !== 0) return console.log("Invalid Format");

    console.log(number);

}