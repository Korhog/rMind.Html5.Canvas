var app = {}; // application

require.config({
    baseUrl: 'engine',
    paths: {
       jquery: 'js/jquery-3.3.1.min',
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
    
    ctx.shadowBlur = 10;
    ctx.shadowColor = "black";
    ctx.shadowOffsetY = 10;

    ctx.fillRect(50, 50, 200, 140); 
    ctx.strokeStyle = "#FF0000";
    ctx.strokeRect(50, 50, 200, 140);       
}