import express from 'express'
import {
  deleteUserByIdHandler,
  getUserByIdHandler,
  getUsersHandler,
  postUsersHandler,
  putUserByIdHandler
} from '../controllers/users.mjs'
import { validateUserPost, validateUserPut, validateParamsUserId } from '../validators/userValidation.mjs'
const usersRouter = express.Router()

usersRouter.route('/')
  .get(getUsersHandler)
  .post(validateUserPost, postUsersHandler)

usersRouter.route('/:userId')
  .get(validateParamsUserId, getUserByIdHandler)
  .put(validateParamsUserId, validateUserPut, putUserByIdHandler)
  .delete(validateParamsUserId, deleteUserByIdHandler)

export default usersRouter 
