import http from "http"
let PORT = process.env.PORT || 3000
let server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.writeHead(200, {
            "content-type": "application/json"
        });
        res.end(JSON.stringify({
            Success: true,
            user: "gajanan14"
        }))
    }
})

server.listen(PORT, () => {
    console.log("Server is listening to", PORT)
})