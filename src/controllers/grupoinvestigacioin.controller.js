const db = require('../../db/models')

module.exports.getGrupos = async (__, res) => {
  const grupos = db.GrupoInvestigacion.findAll()

  if (!grupos) return res.status(404).send('No hay comites')

  return res.status(200).json({ grupos })
}