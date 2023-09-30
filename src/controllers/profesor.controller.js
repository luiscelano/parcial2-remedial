const db = require('../../db/models')

module.exports.getProfesores = async (__, res) => {
  const profesores = await db.Profesor.findAll()

  if (!profesores) return res.status(404).send('No hay comites')

  return res.status(200).json({ profesores })
}