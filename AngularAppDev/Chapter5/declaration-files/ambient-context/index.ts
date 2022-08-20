export {}

declare class Ghost {
    fly():void;
}

declare function require(moduleName: string): any;
require('./ghost');

let ghost = new Ghost();
ghost.fly();