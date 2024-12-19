// const express = require('express')
import express from 'express';
import 'dotenv/config'
import prismaRouter from './routes/prismaRoute.js'

const app = express();

app.get("/", (req, res) => {
    res.send({ status: true, message: "hello-world" })
})

app.use("/prisma", prismaRouter)

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`app running on port:${port}`);
})