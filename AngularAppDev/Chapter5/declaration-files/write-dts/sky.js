var Sky = (function () {
    function Sky() {
        this.color = '';
    }
    Sky.prototype.rain = function () {
        console.log(`The sky is crying ${this.color}, as I wait for you.`);
    };
    if (global) {
        global.Sky = Sky;
    }
    return Sky;
}());

//执行时需要手动将此文件复制到本目前其他文件生成的js文件所在的文件夹中