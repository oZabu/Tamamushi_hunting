function _random() {
    var window_w = window.innerWidth;
    var window_h = window.innerHeight;


    var H_min = 1;
    var H_max = window_h - 210;
    var W_min = 1;
    var W_max = window_w - 210;

    var _a = Math.floor(Math.random() * (H_max + 1 - H_min)) + H_min;
    var _b = Math.floor(Math.random() * (W_max + 1 - W_min)) + W_min;

    var a = _a + "px";
    var b = _b + "px";

    document.getElementById("_height").style.height = a;
    document.getElementById("_width").style.width = b;

    var checktamamusi = document.getElementById("tamamusi");
    checktamamusi.checked = false;

};
function HardB() {
    document.getElementById('_target').style.height = '30px';
    document.getElementById('_target').style.width = '30px';
};

function NormalB() {
    document.getElementById('_target').style.height = '100px';
    document.getElementById('_target').style.width = '100px';
};

function EasyB() {
    document.getElementById('_target').style.height = '200px';
    document.getElementById('_target').style.width = '200px';
};


setInterval(_random, 1000);