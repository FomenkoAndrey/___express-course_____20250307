import { log } from '../config/logger.mjs'

export const handlerRequest = (req, res) => {
  log(req.body, 'blue')
  res.send('Response from the server')
}
