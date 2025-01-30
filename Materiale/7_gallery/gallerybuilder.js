function button(text,func){
	let button = document.createElement("input");
	button.setAttribute("type","button");
	button.setAttribute("value",text);
	button.addEventListener("click",func);
	return button;
}

function createGallery(g){
	
	let images = g.getElementsByTagName("img");
	let s = [];
	/*
	while(images.length>0){
		let im = images[0];
		g.removeChild(im);
		s.push(im.getAttribute("src"));
	}
	*/
	while(images.length>0)
		s.push(g.removeChild(images[0]).getAttribute("src"));
	
	let i = 0;
	let img = document.createElement("img");
	img.setAttribute("src",s[i]);
	
	g.appendChild(button("<", function(){
		img.setAttribute("src",s[i=(i-1>=0?i-1:s.length-1)]);
	}));
	g.appendChild(img);
	g.appendChild(button(">", function(){
		img.setAttribute("src",s[i=(i+1)%s.length]);
	}));
}

let galleries = document.getElementsByClassName("gallery");
for(let gallery=0; gallery<galleries.length; gallery++)
	createGallery(galleries[gallery]);