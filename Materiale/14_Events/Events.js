function testEvent(e){
	let type = e.type;
	let target = e.target;
	let currentTarget = e.currentTarget;
	let timestamp = e.timeStamp;
	console.log("Event: "+type+"\t"+target+"\t"+currentTarget+"\t"+timestamp);
}

let p = document.getElementById("secondP");
let img = p.firstChild.nextSibling;

//p.addEventListener("click",testEvent,true);
//p.addEventListener("click",testEvent,true);
p.addEventListener("click",testEvent,{ capture: true, once: true });

// p.addEventListener("click",function t(a){console.log("ci sono anche io")});
//p.removeEventListener("click",testEvent);

//setTimeout(resetP,5000);

let handle = setInterval(intervalP,1000);

function imgHandler(e){
	testEvent(e);
	console.log("ciao, sono un'immagine");
	e.stopPropagation();
}
img.addEventListener("click",imgHandler);

function resetP(e){
   p.textContent = "Timeout !";
}

let x = 0;
function intervalP(e){
   p.textContent = "Interval "+(x++);
}
p.addEventListener("click",function clear(e){clearTimeout(handle);});

