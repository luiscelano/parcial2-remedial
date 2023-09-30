import Express from 'express'
import ComiteControllers from 'controllers/comite.controller'

const Router = Express.Router()

Router.get('/', ComiteControllers.getComites)
Router.get('/:idComite', ComiteControllers.findComiteById)
Router.post('/', ComiteControllers.createComite)
Router.put('/:idComite', ComiteControllers.updateComite)
Router.delete('/:idComite', ComiteControllers.deleteComite)

export default Router
