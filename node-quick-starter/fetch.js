const fetch = require('node-fetch');



var myHeaders = {
  "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.167 YaBrowser/22.7.3.796 Yowser/2.5 Safari/537.36",
  // "Cookie": "REC_T_ID=ab5faaf2-2796-11ed-a7df-2cea7fac566d; SPC_F=K5j9Z9wgZy8gofQABu2ZEJQJuYsnObTE; SPC_R_T_ID=nrn0wm0HYLzGvgOhcoVyEZMQvyiyqhJYPGVtY9MHfa9NB+UyCJbJhV48jZATbFjX6kAhCWx72DE0VCXQD7bAEiOiq9AUc4vOQ5eWRNtLDBWtY8ruRH0nPBs8Mtljn9vTmaJxEqzD02HQN8iKjPLTx5Qq+V8Ud+Z4q1cBnfuMoFA=; SPC_R_T_IV=MU9lSDFRWVZsRVRkN0ZCaA==; SPC_SI=QvsFYwAAAABlQ0N1aTJmbZfsQQAAAAAAWGg1SDhpc0s=; SPC_T_ID=nrn0wm0HYLzGvgOhcoVyEZMQvyiyqhJYPGVtY9MHfa9NB+UyCJbJhV48jZATbFjX6kAhCWx72DE0VCXQD7bAEiOiq9AUc4vOQ5eWRNtLDBWtY8ruRH0nPBs8Mtljn9vTmaJxEqzD02HQN8iKjPLTx5Qq+V8Ud+Z4q1cBnfuMoFA=; SPC_T_IV=MU9lSDFRWVZsRVRkN0ZCaA==",

}
var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://ph.xiapibuy.com/api/v4/item/get?itemid=12619726175&shopid=143517563", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
