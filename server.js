const http = require('http');
const axios = require('axios');
const fs = require('fs')

const { getWeatherURL } = require('./constants')


const PORT = 8080;
const HOST = "127.0.0.1"

const server = http.createServer((req, res) => {
    const { url } = req
    if (url === "/") {
        const data = fs.readFileSync('./public/app.html');
        res.setHeader("Content-Type", "text/html");
        res.write(data);
        res.end();
    } else if (url === "/weather") {

        const apiURL = getWeatherURL('kolkata');

        axios.get(apiURL).then((apiResponse) => {
            res.setHeader("Content-Type", "application/json");
            res.write(JSON.stringify(apiResponse.data));
            res.end();
        })

    } else {
        res.end("wrong endpoint")
    }
});


server.listen(PORT, HOST, () => {
    console.log(`SERVER started at ${HOST}:${PORT}`)
});