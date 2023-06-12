const express = require('express')
const port = 8000
const route = require('./route/route')
const app = express()

app.use('/',route)

app.listen(port, () => {
    console.log(`App Running On ${port}`)
})