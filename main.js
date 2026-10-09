import express from "express";

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
    res.send("Hello from Express Server!");
});

app.get("/about", (req, res) => {
    res.send("This is About Page");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});