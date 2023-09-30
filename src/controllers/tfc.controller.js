const db = require('../../db/models')

module.exports.getTfc = async (__, res) => {
  const tfcs = await db.Tfc.findAll()

  if (!tfcs) return res.status(404).send('No hay comites')

  return res.status(200).json({ tfcs })
}