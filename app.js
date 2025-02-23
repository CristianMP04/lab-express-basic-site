const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/view/home.html");
})

app.get('/home', (req, res) => {
    res.sendFile(__dirname + "/view/home.html");
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + "/view/about.html");
})

app.get('/works', (req, res) => {
    res.sendFile(__dirname + "/view/works.html");
})

app.get('/gallery', (req, res) => {
    res.sendFile(__dirname + "/view/gallery.html");
})

app.listen(port, () => {
    // console.log();
    console.log(`App on port ${port}`);
}) 