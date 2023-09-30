const db = require('../../db/models')

module.exports.createTfc = async (req, res) => {
  try {
    const tfc = await db.Tfc.create(req.body)

    if (!tfc) throw new Error('no se ha creado ningun tfc')

    return res.status(200).json({ tfc })
  } catch (error) {
    console.error(error.message)
    res.status(500).send(error.message)
  }
}