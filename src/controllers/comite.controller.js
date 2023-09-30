const db = require('../../db/models')

module.exports.getComites = async (__, res) => {
  const comites = await db.Comite.findAll()

  if (!comites) return res.status(404).send('No hay comites')

  return res.status(200).json({ comites })
}

module.exports.createComite = async (req, res) => {
  try {
    const comite = await db.Comite.create(req.body)

    if (!comite) throw new Error('no se ha creado ningun alumno')

    return res.status(200).json({ comite })
  } catch (error) {
    console.error(error.message)
    res.status(500).send(error.message)
  }
}