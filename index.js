const express = require('express')
const app = express()

const PORT = process.env.PORT || 80

app.get('/', (req, res) => {
    res.end(`
    <h1>Home page</h1>
    <a href="/about">Link About</a>
    `)
})

app.get('/about', (req, res) => {
    res.end(`
    <h1>About page</h1>
    <a href="/">Link Home</a>
    `)
})

app.listen(PORT, () => {
    console.log('Server has been started...')
})