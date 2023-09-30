const db = require('../../db/models')

module.exports.getTfc = async (__, res) => {
  const tfcs = await db.Tfc.findAll()

  if (!tfcs) return res.status(404).send('No hay comites')

  return res.status(200).json({ tfcs })
}

module.exports.createTfc = async (req, res) => {
  try {
    const tfc = await db.Tfc.create(req.body)

    if (!tfc) throw new Error('no se ha creado ningun alumno')

    return res.status(200).json({ tfc })
  } catch (error) {
    console.error(error.message)
    res.status(500).send(error.message)
  }
}