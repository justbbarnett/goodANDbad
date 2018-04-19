let http = require("http");
const PORT = 7000
const PORT_TWO = 7500

let server = http.createServer ((req, res) => {

    
    res.end("You look beautiful today!")
})

server.listen (PORT, () => {
    console.log("nice things!!!");
})


let serverTwo = http.createServer ((req, res) => {

    
    res.end("I will tell you mean things now!")
})

serverTwo.listen (PORT_TWO, () => {
    console.log("mean things!!!");
})