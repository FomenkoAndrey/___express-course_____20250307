import express from 'express'
import router from './routes/index.mjs'
import { errors } from 'celebrate'
const PORT = 3000
const app = express()

app.use(express.json())
app.use(router)
app.use(errors())

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
}) 
