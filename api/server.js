const jsonServer = require("json-server")
const cors = require("cors")

const corsOptions = {
  origin: "https://world-wise-snowy-one.vercel.app",
  credentials: true,
}

const server = jsonServer.create()

const router = jsonServer.router("db.json")

const middlewares = jsonServer.defaults()

server.use(cors(corsOptions))

server.use(middlewares)
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
    "/blog/:resource/:id/show": "/:resource/:id",
  })
)
server.use(router)
server.listen(3000, () => {
  console.log("JSON Server is running")
})

module.exports = server
