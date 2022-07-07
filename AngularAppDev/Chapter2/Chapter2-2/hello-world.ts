export function helloWorld() {
    console.log('hello, world');
}

var i = 0;
setInterval(function(){
    console.log('偶数i: ' + i);
    i += 2;
}, 3000);
