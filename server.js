let http = require("http");
const PORT = 7000
const PORT2 = 7500

let server = http.createServer ((req, res) => {

    
    res.end("You look beautiful today!")
})

server.listen (PORT, () => {
    console.log("nice things!!!");
})


let server2 = http.createServer ((req, res) => {

    
    res.end("I will tell you mean things now!")
})

server2.listen (PORT2, () => {
    console.log("mean things!!!");
})