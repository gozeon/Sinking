const bodyParser = require('body-parser')
const express = require('express')
const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()
const app = express()

app.use(bodyParser.json())
app.use(require('morgan')())

app.get('/script', async (req, res) => {
    const scripts = await prisma.script.findMany()

    res.json(scripts)
})

app.post('/script', async (req, res, next) => {
   const { method, path, code } = req.body
   const result = await prisma.script.create({
       data: {
           path,
           method,
           code,
       },
   })
   res.json(result)
})

app.put('/script/:id', async (req, res) => {
    const { id } = req.params
    const { method, path, code, published } = req.body
    const newScript = await prisma.script.update({
        where: { id: Number(id) },
        data: { method, path, code, published,  },
    })
    res.json(newScript)
})

app.delete(`/script/:id`, async (req, res) => {
    const { id } = req.params
    const script = await prisma.script.delete({
        where: {
            id: Number(id),
        },
    })
    res.json(script)
})

app.use((error, req, res, next) => {
    return res.status(500).json({ error: error.toString() });
});

module.exports = app
