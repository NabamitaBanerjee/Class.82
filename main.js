var mouseevent = "empty";
var lastpositionofx, lastpositionofy;
canvas=document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "red";
width=1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    mouseevent = "mousedown";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    currentpositionofmousex = e.clientX-canvas.offsetLeft;
    currentpositionofmousey = e.clientY-canvas.offsetTop;

    if(mouseevent == "mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;

        console.log("last position of x and y coordinates = ");
        console.log("x = " + lastpositionofx + "y = " + lastpositionofy);
        ctx.moveTo(lastpositionofx, lastpositionofy);


        console.log("current position of x and y coordinates = ");
        console.log("x = " + currentpositionofmousex + "y = " + currentpositionofmousey);
        ctx.lineTo(currentpositionofmousex, currentpositionofmousey);
        ctx.stroke();
    }
    lastpositionofx=currentpositionofmousex;
    lastpositionofy=currentpositionofmousey;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mousevent="mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mousevent="mouseleave";
}

function clearArea()
{
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
}