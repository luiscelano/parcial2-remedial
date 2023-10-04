import Express from 'express'
import * as TfcControllers from 'controllers/tfc.controller'

const Router = Express.Router()

Router.post('/', TfcControllers.createTfc)
Router.patch('/:numeroOrden/asociarAlumno/:idAlumno', TfcControllers.asociarAlumno)

export default Router
