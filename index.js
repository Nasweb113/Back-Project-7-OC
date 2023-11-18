require ("dotenv").config()
const express = require("express")
const port = process.env.PORT || 3002
const app = express()
const bodyParser = require ("body-parser")
const { logUser, signupUser, deleteUser } = require("./controllers/users.js")
const cors = require("cors")
 
const { postRouter } = require("../back/routes/posts.js")
app.use(cors())
app.use(bodyParser.json())

const {prisma} = require("./db/db.js")



//view all users
//prisma.post.findMany().then(console.log).catch(console.log)

app.use("/posts", postRouter)
app.use("/uploads", express.static('uploads'))

app.post("/auth/login", logUser)
app.post("/auth/signup", signupUser)

app.delete("/delete", deleteUser)
app.listen(port, ()=> console.log(`listening on port ${port}`))

//ES MODULES - BROWSER eg: Kanap  (export { myfunction})
//COMMONJS - SERVER eg: NodeJs, sauces review app
// import and module.export = { myfunction }
// const { my function } = require("./agt")