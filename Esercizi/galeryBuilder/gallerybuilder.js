
// Create button
// It shows some text 
// It has a function to iterate through images
function button(text, func){
	let button = document.createElement("input");
	// Set type of DOM element
	button.setAttribute("type", "button");
	// Set a text to show
	button.setAttribute("value", text);
	// On click, execute the given function
	button.addEventListener("click", func); 
	return button;
}


function createGallery(g){
	// from g that is a 'document'
	// get all the elements with the 'img' tag 

	// Returns a live HTMLCollection of elements with the given tag name.
	// (for Element type)
	let images = g.getElementsByTagName("img");
	// sets an empty array
	let s = [];


	// Alternative way for the next while cycle
	/*
	while(images.length>0){
		let im = images[0];
		g.removeChild(im);
		s.push(im.getAttribute("src"));
	}
	*/

	while(images.length>0)
	// Removes a child node from the DOM and returns the removed node.
	// So the images are pushed into s and removed from g
		s.push(
			g.removeChild(images[0]).getAttribute("src")
		);
	// g is now empty HTML Collection, s is an array of URL
		
	// counter variable for the images
	let i = 0;
	// Creates a new image element for the DOM
	let img = document.createElement("img");
	// Sets the src of the image to the given URL
	img.setAttribute("src", s[i]);
	
	// g (the original <div class='gallery'>) is now modified
	// in order to contain two buttons and an image
	// <, image, > 
	g.appendChild(button(
		"<", 
		function(){ img.setAttribute("src", s[i=(i-1>=0?i-1:s.length-1)]);}
	));

	g.appendChild(img);
	
	g.appendChild(button(
		">", 
		function(){ img.setAttribute("src", s[i=(i+1)%s.length]);}
	));
}

// Gets a collection of 'div' html elements
// galleries[0], galleries[1]
// where galleries[i] is a 'document'

// A live HTMLCollection of found elements (for Document type)
// Changes here reflect in the DOM (html file/ environment)
let galleries = document.getElementsByClassName("gallery");

// For each gallery
for(let gallery=0; gallery<galleries.length; gallery++)
	// create a Gallery
	createGallery(galleries[gallery]);

// Now galleries is modified
// we have 2 div with two galleries