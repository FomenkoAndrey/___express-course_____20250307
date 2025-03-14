import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { log } from './utils/helpers.mjs'

const app = express()
const PORT = 3000
const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200
}

app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(corsOptions))

app.use((req, res) => {
  const data = {
    name: 'John Doe',
    age: 30,
    skills: ['JavaScript', 'Python', 'Java']
  }

  log('data:', data, 'blue')

  res.json(data)
})

app.listen(PORT, () => {
  log(`Server is running on port ${PORT}`, 'yellow')
})
