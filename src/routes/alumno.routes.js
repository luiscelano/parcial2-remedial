import Express from 'express'
import * as AlumnoControllers from 'controllers/alumno.controller'

const Router = Express.Router()

Router.get('/', AlumnoControllers.getAlumnos)
Router.get('/:idAlumno', AlumnoControllers.findAlumnoById)
Router.post('/', AlumnoControllers.createAlumno)
Router.put('/:idAlumno', AlumnoControllers.updateAlumno)
Router.delete('/:idAlumno', AlumnoControllers.deleteAlumno)

export default Router
