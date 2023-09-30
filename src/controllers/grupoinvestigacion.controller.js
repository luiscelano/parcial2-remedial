const db = require('../../db/models')

module.exports.getGrupos = async (__, res) => {
  const grupos = await db.GrupoInvestigacion.findAll()

  if (!grupos) return res.status(404).send('No hay comites')

  return res.status(200).json({ grupos })
}

module.exports.createGrupo = async (req, res) => {
  try {
    const grupo = await db.GrupoInvestigacion.create(req.body)

    if (!grupo) throw new Error('no se ha creado ningun alumno')

    return res.status(200).json({ grupo })
  } catch (error) {
    console.error(error.message)
    res.status(500).send(error.message)
  }
}