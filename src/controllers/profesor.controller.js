const db = require('../../db/models')

module.exports.getProfesores = async (__, res) => {
  const profesores = await db.Profesor.findAll()

  if (!profesores) return res.status(404).send('No hay comites')

  return res.status(200).json({ profesores })
}

module.exports.createProfesor = async (req, res) => {
  try {
    const profesor = await db.Profesor.create(req.body)

    if (!profesor) throw new Error('no se ha creado ningun alumno')

    return res.status(200).json({ profesor })
  } catch (error) {
    console.error(error.message)
    res.status(500).send(error.message)
  }
}