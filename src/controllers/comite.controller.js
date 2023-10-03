import { Comite } from '../../db/models'

//Lista completa
export async function getComites(__, res) {
  const comites = await Comite.findAll()

  if (!comites) return res.status(404).send('No hay comites')

  return res.status(200).json({ comites })
}

//Crear comite
export async function createComite(req, res) {
  try {
    const comite = await Comite.create(req.body)

    if (!comite) throw new Error('no se ha creado ningun comite')

    return res.status(200).json({ comite })
  } catch (error) {
    console.error(error.message)
    res.status(500).send(error.message)
  }
}

//Actualizar comite
export async function updateComite(req, res) {
  const comite = await Comite.findByPk(req.params.idComite)

  if (!comite) return res.status(404).send('No hay Comite')

  await comite.update({ ...req.body })
  await comite.save()
  return res.status(200).json({ comite })
}

//Encontrar comite por id
export async function findComiteById(req, res) {
  const comite = await Comite.findByPk(req.params.idComite)

  if (!comite) return res.status(404).send('No hay Comite')

  return res.status(200).json({ comite: comite })
}

//Eliminar comite
export async function deleteComite(req, res) {
  try {
    await Comite.destroy({
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
