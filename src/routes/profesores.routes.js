import Express from 'express'
import * as ProfesorControllers from 'controllers/profesor.controller'

const Router = Express.Router()

Router.get('/', ProfesorControllers.getProfesores)
Router.get('/:idProfesor', ProfesorControllers.findProfesorById)
Router.post('/', ProfesorControllers.createProfesor)
Router.put('/:idProfesor', ProfesorControllers.updateProfesor)
Router.delete('/:idProfesor', ProfesorControllers.deleteProfesor),
  Router.patch('/:idProfesor/asignarComite/:idComite', ProfesorControllers.asignarComite)
Router.patch('/:idProfesor/agregarAlumno/:idAlumno', ProfesorControllers.agregarAlumno)

export default Router
