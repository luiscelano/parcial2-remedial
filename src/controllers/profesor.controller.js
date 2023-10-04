import { Profesor, Comite, Alumno } from '../../db/models'

//Lista completa
export async function getProfesores(__, res) {
  try {
    const profesores = await Profesor.findAll({
      include: [
        {
          model: Alumno,
          as: 'alumnos'
        }
      ]
    })

    if (!profesores) return res.status(404).send('No hay profesores')

    return res.status(200).json({ profesores })
  } catch (error) {
    console.error(error.message)
    res.status(500).send(error.message)
  }
}

//Crear profesor
export async function createProfesor(req, res) {
  try {
    const profesor = await Profesor.create(req.body)

    if (!profesor) throw new Error('no se ha creado ningun profesor')

    return res.status(200).json({ profesor })
  } catch (error) {
    console.error(error.message)
    res.status(500).send(error.message)
  }
}

//Actualizar profesor
export async function updateProfesor(req, res) {
  const profesor = await Profesor.findByPk(req.params.idProfesor)

  if (!profesor) return res.status(404).send('No hay Profesor')

  await profesor.update({ ...req.body })
  await profesor.save()
  return res.status(200).json({ profesor: profesor })
}

//Encontrar profesor por ID
export async function findProfesorById(req, res) {
  const profesor = await Profesor.findByPk(req.params.idProfesor)

  if (!profesor) return res.status(404).send('No hay Profesor')

  return res.status(200).json({ profesor: profesor })
}

//Eliminar profesor
export async function deleteProfesor(req, res) {
  try {
    await Profesor.destroy({
      where: {
        id: req.params.idProfesor
      }
    })
    return res.status(200).json({
      message: 'Profesor eliminado correctamente'
    })
  } catch (error) {
    res.status(500).json({
      message: 'error eliminando al Profesor'
    })
  }
}

export async function asignarComite(req, res) {
  try {
    const comite = await Comite.findByPk(req.params.idComite)
    if (!comite)
      return res.status(404).json({
        message: 'Comite no encontrado'
      })

    const profesor = await Profesor.findByPk(req.params.idProfesor)
    if (!profesor)
      return res.status(404).json({
        message: 'Profesor no encontrado'
      })

    await profesor.addComites([1])

    return res.status(200).json({ message: 'Comite agregado correctamente' })
  } catch (error) {
    console.error('asignarComite error:', error)
    res.status(500).send(error.message)
  }
}

export async function agregarAlumno(req, res) {
  try {
    const profesor = await Profesor.findByPk(req.params.idProfesor)
    if (!profesor)
      return res.status(404).json({
        message: 'Profesor no encontrado'
      })
    const alumno = await Alumno.findByPk(req.params.idAlumno)
    if (!alumno)
      return res.status(404).json({
        message: 'Alumno no encontrado'
      })
    await profesor.addAlumno(alumno)

    return res.status(200).json({
      message: 'Alumno agregado correctamente'
    })
  } catch (error) {
    console.error(error)
    return res.status(500).send(error.toString())
  }
}
