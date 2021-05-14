const bodyParser = require('body-parser')
const express = require('express')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
const app = express()

app.use(bodyParser.json())
app.use(require('morgan')())

app.get('/script', async (req, res) => {
  try {
    const scripts = await prisma.script.findMany()

    res.json(scripts)
  } catch (e) {
    next(e)
  }
})

app.post('/script', async (req, res, next) => {
  const { method, path, code } = req.body
  try {
    const result = await prisma.script.create({
      data: {
        path,
        method,
        code,
      },
    })
    res.json(result)
  } catch (e) {
    next(e)
  }
})

app.put('/script/:id', async (req, res, next) => {
  const { id } = req.params
  const { method, path, code, published } = req.body
  try {
    const newScript = await prisma.script.update({
      where: { id: Number(id) },
      data: { method, path, code, published },
    })
    res.json(newScript)
  } catch (e) {
    next(e)
  }
})

app.delete(`/script/:id`, async (req, res, next) => {
  const { id } = req.params
  try {
    const script = await prisma.script.delete({
      where: {
        id: Number(id),
      },
    })
    res.json(script)
  } catch (e) {
    next(e)
  }
})

app.use((error, req, res, next) => {
  // TODO: https://www.prisma.io/docs/reference/api-reference/error-reference/
  return res.json({ errorMessage: error.message || 'system error' })
})

module.exports = app
