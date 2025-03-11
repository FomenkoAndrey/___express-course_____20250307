import { log } from '../config/logger.mjs'

export const notFoundHandler = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`)
  res.status(404)
  next(error)
}

export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500

  log(err.message, 'error')

  if (process.env.NODE_ENV === 'development') {
    log(err.stack, 'error')
  }

  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  })
}
