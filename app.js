const express = require('express')

const app = express()

app.get("/", (req, res) => {
    res.send({ status: true, message: "hello-world" })
})

const port = 3000

app.listen(port, () => {
    console.log(`app running on port:${port}`);
})