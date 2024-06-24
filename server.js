const express = require('express');
const app = express();
const port = 8888;



app.get('/:verb/:adjective/:noun', (req, res) => {
    const { verb, adjective, noun } = req.params;
    const responseMessage = `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`;
    res.send(responseMessage);
});

app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to the Bug Tracker</h1>
        <a href="/bugs">View Bugs</a>
    `);
});

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

app.get('/:verb/:adjective/:noun', (req, res) => {
    const { verb, adjective, noun } = req.params;
    const projectName = `${verb}-${adjective}-${noun}`;
    res.send(`Congratulations on starting a new project called ${projectName}!`);
});



app.listen(port, () => {
    console.log(`test http://localhost:${port}`);
});