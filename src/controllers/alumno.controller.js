const db = require('../../db/models')

module.exports.getAlumnos = async (__, res) => {
  const alumnos = db.Alumno.findAll()

  if (!alumnos) return res.status(404).send('No hay comites')

  return res.status(200).json({ alumnos })
}