// imports
const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

// config
const PORT = process.env.PORT | 4000 
const app = express()

app.get('/', (req, res) => {
    res.send('server running ...👍');
})

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`)
})