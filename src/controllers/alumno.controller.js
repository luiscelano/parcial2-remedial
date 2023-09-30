const db = require('../../db/models')

//Lista completa
module.exports.getAlumnos = async (__, res) => {
  const alumnos = await db.Alumno.findAll()

  if (!alumnos) return res.status(404).send('No hay alumnos')

  return res.status(200).json({ alumnos })
}

//Crear Alumno
module.exports.createAlumno = async (req, res) => {
  try {
    const alumno = await db.Alumno.create(req.body)

    if (!alumno) throw new Error('no se ha creado ningun alumno')

    return res.status(200).json({ alumno })
  } catch (error) {
    console.error(error.message)
    res.status(500).send(error.message)
  }
}

//Actualizar alumno
module.exports.updateAlumno = async (req, res) => {
  const alumno = await db.Alumno.findByPk(req.params.idAlumno)

  if (!alumno) return res.status(404).send('No hay Alumno')

  await alumno.save()
  return res.status(200).json({ alumnos: alumno })
}

//Encontrar alumno por ID
module.exports.findAlumnoById = async (req, res) => {
  const alumno = await db.Alumno.findByPk(req.params.idAlumno)

  if (!alumno) return res.status(404).send('No hay Alumno')

  return res.status(200).json({ alumnos: alumno })
}

//Eliminar alumno
module.exports.deleteAlumno = async (req, res) => {
  try {
    await db.Alumno.destroy({
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