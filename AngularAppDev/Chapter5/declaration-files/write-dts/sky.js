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