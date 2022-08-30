const fetch = require('node-fetch');

var myHeaders = {
  "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.167 YaBrowser/22.7.3.796 Yowser/2.5 Safari/537.36",
  "X-Forwarded-For": "10.139.253.34"
}
var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

module.exports = function () {
  fetch("https://ph.xiapibuy.com/api/v4/item/get?itemid=12619726175&shopid=143517563", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
