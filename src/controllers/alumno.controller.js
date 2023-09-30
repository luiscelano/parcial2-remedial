const db = require('../../db/models')

module.exports.getAlumnos = async (__, res) => {
  const alumnos = await db.Alumno.findAll()

  if (!alumnos) return res.status(404).send('No hay comites')

  return res.status(200).json({ alumnos })
}

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