function Piece(p,t={dx:0,dy:0,r:false}){
    this.color  = p.color;
    this.blocks = [];
    p.blocks.forEach(b => this.blocks.push({x: b.x+t.dx, y: b.y+t.dy}) );
	if(t.r) this.blocks.forEach(b => [b.x,b.y] = [ p.blocks[0].x-(b.y-p.blocks[0].y), p.blocks[0].y+(b.x-p.blocks[0].x) ] );	
}

function BrickPit(width,height){
    this.blocks     = [];
    this.size       = { w: width, h: height };
    this.checkPiece = (p) => p.blocks.some(b => b.y>=height || b.x<0 || b.x>=width || this.blocks[b.y][b.x]);
	this.storePiece = (p) => { p.blocks.forEach(b => this.blocks[b.y][b.x]=p.color); this.clearLines() };
	this.clearLines = ( ) => { this.blocks = this.blocks.filter(line=>line.some(b=>b==0)); this.fill() };
	(this.fill      = ( ) => { while(this.blocks.length<height) this.blocks.unshift(Array(width).fill(0)) })();
}

function BrickCanvas(side,width,height){
    this.draw = (pit,cur) => { 
        pit.blocks.forEach( (row,y) => row.forEach( (b,x) => box(x,y,side,b,canv.getContext("2d")) ));
        cur.blocks.forEach( b => box(b.x,b.y,side,cur.color,canv.getContext("2d")) );
    }
    var box  = (x,y,s,c,g) => { g.fillStyle = '#'+('00000'+(c).toString(16)).slice(-6); g.fillRect(x*s,y*s,s,s); };
    var canv = document.body.appendChild(document.createElement('canvas'));
    canv.setAttribute("width",pit.size.w*side);
    canv.setAttribute("height",pit.size.h*side);
}

window.addEventListener('keydown',(k)=>{
    var actions = { 37:{dx:-1,dy:0}, 39:{dx:1,dy:0}, 40:{dx:0,dy:1}, 32:{dx:0,dy:0,r:true} };
    if(actions[k.keyCode] && !pit.checkPiece(new Piece(curr,actions[k.keyCode])))
        curr = new Piece(curr,actions[k.keyCode]);
});

window.setInterval(()=>{
    canvas.draw(pit,curr);
    if(!pit.checkPiece(curr=new Piece(curr,{dx:0, dy:1}))) return;
    pit.storePiece(new Piece(curr,{dx:0, dy:-1}));
    curr = new Piece(shapes[Math.floor(Math.random()*shapes.length)],{dx:Math.floor(pit.size.w/2),dy:0});
}, 100);

var shapes = [ { color: 0x0000ff, blocks: [ {x:0,y:0},{x:0,y:1},{x:1,y:0},{x:1,y:1}] },
               { color: 0xff8000, blocks: [ {x:0,y:1},{x:0,y:2},{x:1,y:0},{x:1,y:1}] },
               { color: 0x00ffff, blocks: [ {x:1,y:1},{x:1,y:2},{x:0,y:0},{x:0,y:1}] },
               { color: 0xffff00, blocks: [ {x:1,y:1},{x:1,y:0},{x:1,y:2},{x:0,y:2}] },
               { color: 0xff0000, blocks: [ {x:0,y:1},{x:0,y:0},{x:0,y:2},{x:0,y:3}] },
               { color: 0x00ff00, blocks: [ {x:0,y:0},{x:0,y:1},{x:0,y:2},{x:1,y:1}] },
               { color: 0xff00ff, blocks: [ {x:0,y:1},{x:0,y:0},{x:0,y:2},{x:1,y:2}] } ]; 
var pit    = new BrickPit(12,30);
var canvas = new BrickCanvas(20,pit.size.w,pit.size.h);
var curr   = new Piece(shapes[Math.floor(Math.random()*shapes.length)],{dx:Math.floor(pit.size.w/2),dy:0});