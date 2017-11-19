const path = require('path')
const koa = require('koa')
const static = require('koa-static')

const config = require('../config')

const app = new koa()

const staticPath = '../web/dist'
app.use(static(
  path.join(__dirname, staticPath)
))
app.use(async (ctx) => {
  ctx.body = 'hello tinn'
})

app.listen(config.port)
console.log(`the server is start at port ${config.port}`)