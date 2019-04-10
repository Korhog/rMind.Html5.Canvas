var app = {}; // application

require.config({
    baseUrl: 'engine',
    paths: {
       jquery: 'js/jquery',
       message: 'js/message'
    }
 });

require(['jquery'], function ($) {
    // do nothing
    initialize();
});

var initialize = function() {
    var canvas = document.getElementById("rMind.Canvas");
    ctx = canvas.getContext('2d');
    ctx.fillRect(20, 20, 200, 140);   
}