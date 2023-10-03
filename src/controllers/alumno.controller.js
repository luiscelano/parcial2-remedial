import { Alumno } from '../../db/models'

//Lista completa
export async function getAlumnos(__, res) {
  const alumnos = await Alumno.findAll()

  if (!alumnos) return res.status(404).send('No hay alumnos')

  return res.status(200).json({ alumnos })
}

//Crear Alumno
export async function createAlumno(req, res) {
  try {
    const alumno = await Alumno.create(req.body)

    if (!alumno) throw new Error('no se ha creado ningun alumno')

    return res.status(200).json({ alumno })
  } catch (error) {
    console.error(error.message)
    res.status(500).send(error.message)
  }
}

//Actualizar alumno
export async function updateAlumno(req, res) {
  try {
    const alumno = await Alumno.findByPk(req.params.idAlumno)

    if (!alumno) return res.status(404).send('Alumno no encontrado')
    await alumno.update({ ...req.body })
    await alumno.save()
    return res.status(200).json({ alumno })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

//Encontrar alumno por ID
export async function findAlumnoById(req, res) {
  const alumno = await Alumno.findByPk(req.params.idAlumno)

  if (!alumno) return res.status(404).send('No hay Alumno')

  return res.status(200).json({ alumnos: alumno })
}

//Eliminar alumno
export async function deleteAlumno(req, res) {
  try {
    await Alumno.destroy({
      where: {
        id: req.params.idAlumno
      }
    })
    return res.status(200).json({
      message: 'Alumno eliminado correctamente'
    })
  } catch (error) {
    res.status(500).json({
      message: 'error eliminando al Alumno'
    })
  }
}
