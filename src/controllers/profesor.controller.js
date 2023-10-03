import { Profesor } from '../../db/models'

//Lista completa
export async function getProfesores(__, res) {
  const profesores = await Profesor.findAll()

  if (!profesores) return res.status(404).send('No hay profesores')

  return res.status(200).json({ profesores })
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
