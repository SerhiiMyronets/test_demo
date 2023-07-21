import express from 'express'
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res ) => {

    let helloWorld = 'Hello World!!1110011!!';

    res.send(helloWorld)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})