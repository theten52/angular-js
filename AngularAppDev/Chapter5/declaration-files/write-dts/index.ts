export { }
declare function require(moduleName: string):any;
require('./sky');

let sky = new Sky();
sky.color = 'blue';
sky.rain();