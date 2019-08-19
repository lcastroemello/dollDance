var body = document.querySelector("body");
var bigcanvas = document.getElementById("bigcanvas");
var f = bigcanvas.getContext("2d");
var canvas = document.getElementById("canvas");
var d = canvas.getContext("2d");

f.beginPath();

// background
d.beginPath();
f.fillStyle = "white";
f.fillRect(0, 0, bigcanvas.width, bigcanvas.height);

//hair
d.strokeStyle = "saddlebrown";
d.lineWidth = "100";
d.beginPath();
d.moveTo(250, 80);
d.lineTo(250, 250);
d.stroke();

//legs
d.lineWidth = "15";
d.strokeStyle = "black";
d.moveTo(250, 200);
d.lineTo(200, 460);
d.stroke();
d.moveTo(250, 200);
d.lineTo(300, 460);
d.stroke();

//arms
d.lineWidth = "10";
d.strokeStyle = "black";
d.moveTo(250, 150);
d.lineTo(350, 250);
d.stroke();
d.moveTo(250, 150);
d.lineTo(150, 250);
d.stroke();

// abs
d.strokeStyle = "hotpink";
d.lineWidth = "15";
d.beginPath();
d.moveTo(250, 140);
d.lineTo(300, 350);
d.stroke();
d.lineTo(200, 350);
d.stroke();
d.closePath();
d.stroke();
d.fillStyle = "hotpink";
d.fill();

//neck

d.strokeStyle = "black";
d.lineWidth = "25";
d.beginPath();
d.moveTo(250, 150);
d.lineTo(250, 130);
d.stroke();

//head
d.strokeStyle = "black";
d.lineWidth = 5;
d.beginPath();
d.arc(250, 100, 50, 0, Math.PI * 2);
d.fillStyle = "wheat";
d.fill();
d.stroke();

//right eye
d.strokeStyle = "black";
d.lineWidth = 1;
d.beginPath();
d.arc(230, 90, 5, 0, Math.PI * 2);
d.fillStyle = "black";
d.fill();
d.stroke();

// left eye
d.strokeStyle = "black";
d.lineWidth = 1;
d.beginPath();
d.arc(270, 90, 5, 0, Math.PI * 2);
d.fillStyle = "black";
d.fill();
d.stroke();

//mouth
d.strokeStyle = "tomato";
d.lineWidth = 5;
d.beginPath();
d.arc(250, 110, 15, 0, Math.PI);
d.stroke();

//bangs
d.strokeStyle = "saddlebrown";
d.lineWidth = 18;
d.beginPath();
d.moveTo(250, 45);
d.lineTo(200, 98);
d.stroke();
d.moveTo(250, 45);
d.lineTo(300, 98);
d.stroke();

// make it move!

var y = 0;
var x = 0;

body.addEventListener("keydown", function(e) {
    f.clearRect(x, y, canvas.width, canvas.height);
    f.clearRect(0, 0, canvas.width, canvas.height);
    f.drawImage(canvas, x, y);
    // if you replace it for d.drawImage instead of f, it creates AN AMAZING effect
    if (e.keyCode === 39) {
        console.log("pressing that > arrow babe");
        return (x = x + 5);
    } else if (e.keyCode === 37) {
        console.log("pressing that < arrow babe");
        return (x = x - 5);
    } else if (e.keyCode === 38) {
        console.log("goooing up");
        return (y = y - 5);
    } else if (e.keyCode === 40) {
        console.log("gooing down");
        return (y = y + 5);
    }
});
