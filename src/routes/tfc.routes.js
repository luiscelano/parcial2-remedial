import Express from 'express'
import TfcControllers from 'controllers/tfc.controller'

const Router = Express.Router()

Router.post('/', TfcControllers.createTfc)

export default Router
