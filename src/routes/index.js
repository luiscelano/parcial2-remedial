import express from 'express'
import AlumnoRoutes from './alumno.routes'
import ComiteRoutes from './comite.routes'
import GrupoInvestigacionRoutes from './grupoInvestigacion.routes'
import ProfesoresRoutes from './profesores.routes'
import TfcRoutes from './tfc.routes'

const Router = express.Router()

Router.use('/alumnos', AlumnoRoutes)
Router.use('/comites', ComiteRoutes)
Router.use('/grupos', GrupoInvestigacionRoutes)
Router.use('/profesores', ProfesoresRoutes)
Router.use('/tfcs', TfcRoutes)

export default Router
