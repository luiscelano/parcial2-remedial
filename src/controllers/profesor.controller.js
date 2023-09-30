const db = require('../../db/models')

//Lista completa
module.exports.getProfesores = async (__, res) => {
  const profesores = await db.Profesor.findAll()

  if (!profesores) return res.status(404).send('No hay profesores')

  return res.status(200).json({ profesores })
}

//Crear profesor
module.exports.createProfesor = async (req, res) => {
  try {
    const profesor = await db.Profesor.create(req.body)

    if (!profesor) throw new Error('no se ha creado ningun profesor')

    return res.status(200).json({ profesor })
  } catch (error) {
    console.error(error.message)
    res.status(500).send(error.message)
  }
}

//Actualizar profesor
module.exports.updateProfesor = async (req, res) => {
  const profesor = await db.Profesor.findByPk(req.params.idProfesor)

  if (!profesor) return res.status(404).send('No hay Profesor')

  await profesor.update({ ...req.body })
  await profesor.save()
  return res.status(200).json({ profesor: profesor })
}

//Encontrar profesor por ID
module.exports.findProfesorById = async (req, res) => {
  const profesor = await db.Profesor.findByPk(req.params.idProfesor)

  if (!profesor) return res.status(404).send('No hay Profesor')

  return res.status(200).json({ profesor: profesor })
}

//Eliminar profesor
module.exports.deleteProfesor = async (req, res) => {
  try {
    await db.Profesor.destroy({
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
