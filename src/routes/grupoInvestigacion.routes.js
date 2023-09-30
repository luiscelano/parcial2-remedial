import Express from 'express'
import GrupoInvestigacionControllers from 'controllers/grupoinvestigacion.controller'

const Router = Express.Router()

Router.get('/', GrupoInvestigacionControllers.getGrupos)
Router.post('/', GrupoInvestigacionControllers.createGrupo)

export default Router
