import express from "express";
const app = express();

app.listen(3000, () => {
    console.log("Server runninig on port 3000.");
});

app.get('/', (req,res) => {
    res.send(`<h1>Hello Worldsssss</h1>`);
});

app.get('/contact', (req,res) => {
    res.send(`<h1>Contact Page</h1>`);
});