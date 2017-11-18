const path = require('path')
const koa = require('koa')

const config = require('../config')

const app = new koa()

app.use(async (ctx) => {
  ctx.body = 'hello tinn'
})

app.listen(config.port)
console.log(`the server is start at port ${config.port}`)