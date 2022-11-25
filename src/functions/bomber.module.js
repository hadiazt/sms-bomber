// const axios = require('axios')
// const color = require('chalk')
const list = [
    { "a": "b" },
    { "a": "b" },
    { "a": "b" },
    { "a": "b" },
    { "a": "b" },


]
module.exports = ({ number }) => {

    const validate = number.search(/^9\d{9}$/i);
    if (validate !== 0) return console.log("Invalid Format");

    // console.log(number);


    setInterval(function () {
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            console.log(element.a);
        }
        }, 30000);
    // }, 1000);

}