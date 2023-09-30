import express from 'express'
import * as PostsControllers from 'controllers/posts.controller'

const Router = express.Router()
Router.get('/', PostsControllers.getPosts)

export default Router
