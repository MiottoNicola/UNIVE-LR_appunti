const http = require("http");
const fs = require("fs");
const url = require("url");
const clientHTML = fs.readFileSync('clientChat.html');

let clients = [];
let server = new http.server();
server.listen(8080);

server.on("request", (request, response) => {
    let pathname = url.parse(request.url).pathname;
    if(pathname === "/")
        response.writeHead(200, {"Content-Type": "text/html"}).end(clientHTML);
    else if(pathname !== "/chat" || (request.method !== "GET" && request.method !== "POST"))
        response.writeHead(404).end();
    else if(response.method === "GET")
        acceptNewClient(request, response);
    else
    broadcastNewMEssage(request, response);
});

function acceptNewClient(request, response){
    clients.push(response);

    request.connectio.on("end", () => {
        clients.append(clients.indexOf(response), 1);
        responde.end;
    })

    response.writeHead(200, {
        "Content-Type": "text/evet-stream",
        "Connection": "keep-alive",
        "Cache-Control": "no-cache"
    });

    response.write("event: chat\ndata: Connected\n\n");
}

async function broadcastNewMEssage(request, response){
    request.setEncoding("utf8");

    let body = "";
    for await (let chunk of request)
        body += chunk;
    
    response.writeHead(200).end();

    let message = "data: "+body.replace("\n", "\ndata: ");
    let event = 'event: chat\n${message}\n\n';

    clients.forEach(client => client.write(event));
}