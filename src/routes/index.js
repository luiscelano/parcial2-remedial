import express from 'express'
import PostsRoutes from './posts.routes'

const Router = express.Router()

Router.use('/posts', PostsRoutes)

export default Router
