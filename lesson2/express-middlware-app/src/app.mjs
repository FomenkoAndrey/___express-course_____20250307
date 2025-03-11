import express from 'express'
import indexRouter from './routes/index.mjs'
import { requestLogger } from './config/logger.mjs'
import { log } from './config/logger.mjs'
import { notFoundHandler, errorHandler } from './middleware/errorHandler.mjs'

// Константи
const PORT = process.env.PORT || 3000
const app = express()

// Middleware для логування запитів
app.use(requestLogger)

// Middleware для парсингу JSON та URL-encoded
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Маршрути
app.use('/', indexRouter)

// Middleware для обробки помилок
app.use(notFoundHandler)
app.use(errorHandler)

// Запуск сервера
app.listen(PORT, () => {
  log(`Server is running on port ${PORT}`, 'yellow')
})

export default app
