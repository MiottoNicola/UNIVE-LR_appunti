window.onload = function(){ 
    createTicks();
    setInterval(updateClock, 1000); 
};

function createTicks()
{
    var clock = document.getElementById("clock");   
    for(var minute=0; minute<60; minute+=5)
    {
        var tick = document.createElementNS("http://www.w3.org/2000/svg", "line");
        tick.setAttribute("stroke", "black");
        tick.setAttribute("stroke-width", "2px");
        tick.setAttribute("x1",0);
        tick.setAttribute("y1",-90);
        tick.setAttribute("x2",0);
        tick.setAttribute("y2",-100);
        tick.setAttribute('transform', 'rotate('+minute*6.0+')');
        clock.appendChild(tick);
    }
}

function updateClock()
{
    var now = new Date();
    document.getElementById("ore").setAttribute('transform', 'rotate('+now.getHours()*30.0+')');
    document.getElementById("minuti").setAttribute('transform', 'rotate('+now.getMinutes()*6.0+')');
    document.getElementById("secondi").setAttribute('transform', 'rotate('+now.getSeconds()*6.0+')');
}

