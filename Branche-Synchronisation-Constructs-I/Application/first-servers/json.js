const http = require("http");

const host = 'localhost';
const port = 8000;

const fetch = require('node-fetch');

let url = 'https://type.fit/api/quotes'
let settings = { method: "Get"};

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    fetch(url, settings)
    .then(function(data) {
        return data.json()
    })
    .then(function(bird){
        const random = Math.floor(Math.random()*50);
        const quote = `As ${bird[random].author} once said : "${bird[random].text}" How wise !`;
        return quote;
    })
    .then(function(quote){
        res.end(quote);
    })
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
