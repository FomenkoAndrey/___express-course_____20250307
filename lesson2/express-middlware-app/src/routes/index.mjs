import express from 'express'
import { handlerRequest } from '../controllers/mainController.mjs'

const router = express.Router()

router.post('/', handlerRequest)
router.get('/', handlerRequest)

export default router
