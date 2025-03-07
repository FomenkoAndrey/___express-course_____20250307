import express from 'express'
import {
  deleteArticleByIdHandler,
  getArticleByIdHandler,
  getArticlesHandler,
  postArticlesHandler,
  putArticleByIdHandler
} from '../controllers/articles.mjs'

const articlesRouter = express.Router()

articlesRouter.route('/')
  .get(getArticlesHandler)
  .post(postArticlesHandler)

articlesRouter.route('/:articleId')
  .get(getArticleByIdHandler)
  .put(putArticleByIdHandler)
  .delete(deleteArticleByIdHandler)

export default articlesRouter 
