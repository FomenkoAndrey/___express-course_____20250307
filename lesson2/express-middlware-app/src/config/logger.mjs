import chalk from 'chalk'
import morgan from 'morgan'

export const log = (...args) => {
  const color = args.pop()

  if (typeof chalk[color] !== 'function') {
    console.error(`Color ${color} is not supported by chalk`)
    return
  }

  const message = args
    .map((arg) => (typeof arg === 'string' ? arg : JSON.stringify(arg)))
    .join(' ')

  console.log(chalk[color](message))
}

export const requestLogger = morgan('tiny')
