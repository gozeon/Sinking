const bodyParser = require('body-parser')
const express = require('express')
const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()
const app = express()

app.use(bodyParser.json())
app.use(require('morgan')('dev'))

app.all('/getJSON', async (req, res) => {
    await prisma.post.create({
        data: {
            title: 'aaaaa',
            content: 'aaaax'
        }
    })
    const post = await prisma.post.findMany()
    res.json({ data: post })
})

module.exports = app
