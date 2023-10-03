import { GrupoInvestigacion } from '../../db/models'

export async function getGrupo(__, res) {
  const grupos = await GrupoInvestigacion.findAll()

  if (!grupos) return res.status(404).send('No hay grupos')

  return res.status(200).json({ grupos })
}
export async function createGrupo(req, res) {
  try {
    const grupo = await GrupoInvestigacion.create(req.body)

    if (!grupo) throw new Error('no se ha creado ningun grupo')

    return res.status(200).json({ grupo })
  } catch (error) {
    console.error(error.message)
    res.status(500).send(error.message)
  }
}
