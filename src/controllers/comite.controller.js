const db = require('../../db/models')

//Lista completa
module.exports.getComites = async (__, res) => {
  const comites = await db.Comite.findAll()

  if (!comites) return res.status(404).send('No hay comites')

  return res.status(200).json({ comites })
}

//Crear comite
module.exports.createComite = async (req, res) => {
  try {
    const comite = await db.Comite.create(req.body)

    if (!comite) throw new Error('no se ha creado ningun comite')

    return res.status(200).json({ comite })
  } catch (error) {
    console.error(error.message)
    res.status(500).send(error.message)
  }
}

//Actualizar comite
module.exports.updateComite = async (req, res) => {
  const comite = await db.Comite.findByPk(req.params.idComite)

  if (!comite) return res.status(404).send('No hay Comite')

  await comite.update({ ...req.body })
  await comite.save()
  return res.status(200).json({ comite })
}

//Encontrar comite por id
module.exports.findComiteById = async (req, res) => {
  const comite = await db.Comite.findByPk(req.params.idComite)

  if (!comite) return res.status(404).send('No hay Comite')

  return res.status(200).json({ comite: comite })
}

//Eliminar comite
module.exports.deleteComite = async (req, res) => {
  try {
    await db.Comite.destroy({
      where: {
        id: req.params.idComite
      }
    })
    return res.status(200).json({
      message: 'Comite eliminado correctamente'
    })
  } catch (error) {
    res.status(500).json({
      message: 'error eliminando al Comite'
    })
  }
}
