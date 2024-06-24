const express = require('express');
const app = express();
const port = 8888;




app.get('/bugs', (req, res) => {
    res.send(`
        <h1>99 little bugs in the code</h1>
        <a href="/bugs/101">Pull one down, patch it around</a>
    `);
});

app.get('/bugs/:numberOfBugs', (req, res) => {
    const numberOfBugs = parseInt(req.params.numberOfBugs, 10);
    if (numberOfBugs >= 200) {
        res.send(`
            <h1>${numberOfBugs} bugs in the code</h1>
            <a href="/bugs">Start over</a>
        `);
    } else {
        const nextNumberOfBugs = numberOfBugs + 2;
        res.send(`
            <h1>${numberOfBugs} little bugs in the code</h1>
            <a href="/bugs/${nextNumberOfBugs}">Pull one down, patch it around</a>
        `);
    }
});


app.listen(port, () => {
    console.log(`test http://localhost:${port}`);
});