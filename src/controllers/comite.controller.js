const db = require('../../db/models')

module.exports.getComites = async (__, res) => {
  const comites = await db.Comite.findAll()

  if (!comites) return res.status(404).send('No hay comites')

  return res.status(200).json({ comites })
}