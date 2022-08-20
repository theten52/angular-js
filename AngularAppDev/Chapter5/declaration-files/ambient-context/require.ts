export{};

declare function require(moduleName: string): any;

let responseModule = require('./response');
responseModule.response();