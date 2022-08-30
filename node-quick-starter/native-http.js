var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
  'method': 'GET',
  'hostname': 'ph.xiapibuy.com',
  'path': '/api/v4/item/get?itemid=12619726175&shopid=143517563',
  'headers': {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.167 YaBrowser/22.7.3.796 Yowser/2.5 Safari/537.36',
    // 'Cookie': 'REC_T_ID=ab5faaf2-2796-11ed-a7df-2cea7fac566d; SPC_F=K5j9Z9wgZy8gofQABu2ZEJQJuYsnObTE; SPC_R_T_ID=nrn0wm0HYLzGvgOhcoVyEZMQvyiyqhJYPGVtY9MHfa9NB+UyCJbJhV48jZATbFjX6kAhCWx72DE0VCXQD7bAEiOiq9AUc4vOQ5eWRNtLDBWtY8ruRH0nPBs8Mtljn9vTmaJxEqzD02HQN8iKjPLTx5Qq+V8Ud+Z4q1cBnfuMoFA=; SPC_R_T_IV=MU9lSDFRWVZsRVRkN0ZCaA==; SPC_SI=QvsFYwAAAABlQ0N1aTJmbZfsQQAAAAAAWGg1SDhpc0s=; SPC_T_ID=nrn0wm0HYLzGvgOhcoVyEZMQvyiyqhJYPGVtY9MHfa9NB+UyCJbJhV48jZATbFjX6kAhCWx72DE0VCXQD7bAEiOiq9AUc4vOQ5eWRNtLDBWtY8ruRH0nPBs8Mtljn9vTmaJxEqzD02HQN8iKjPLTx5Qq+V8Ud+Z4q1cBnfuMoFA=; SPC_T_IV=MU9lSDFRWVZsRVRkN0ZCaA=='
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

req.end();
