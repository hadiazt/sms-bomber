// import axios from 'axios'
// import color from 'chalk'

// module.exports = ({ number, time }) => {

//     const validate = number.search(/^9\d{9}$/i);
//     if (validate !== 0) return console.log(color.red("ERROR :\nInvalid Phone Number/Format"));

//     require('../routes.js').API({ number })
//     var q = 0

//     setInterval(function () {
//         for (let num = 0; num < list.length; num++) {
//             const API = list[num];

//             if (!API.headers) {
//                 var headers = {}
//             } else {
//                 var headers = API.headers;
//             }

//             if (API.method == "POST") {
//                 axios.post(API.url, API.data, headers).then(function () {
//                     console.log(color.green(`Request From ${API.name} Sends To ${number} | ${q++}`));
//                 }).catch(error => {
//                     console.log(color.red(`ERROR :\n${error}`));
//                 })
//             } else {
//                 axios.get(API.url.headers).then(function () {
//                     console.log(color.green(`Request From ${API.name} Sends To ${number} | ${q++}`));
//                 }).catch(error => {
//                     console.log(color.red(`ERROR :\n${error}`));
//                 })
//             }
//         }
//     }, time);
// }