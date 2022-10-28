const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())

const courses = require('./data/courses.json');
const details = require("./data/details.json");


app.get('/', (req, res) => {
    res.send("Hey server is running")
})
app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/courses/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const searchCourse = details.find(detail => detail.courseID === id)
    res.send(searchCourse)
})

app.get('/details/:id', (req, res) => {
    const id = req.params.id;
    const searchDetails = details.find(detail => detail.id === id)
    res.send(searchDetails)
})

app.listen(port, () => {
    console.log("server running with ", port)
})