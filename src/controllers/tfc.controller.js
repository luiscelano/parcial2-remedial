import { Tfc, Alumno } from '../../db/models'

export async function createTfc(req, res) {
  try {
    const tfc = await Tfc.create(req.body)

    if (!tfc) throw new Error('no se ha creado ningun tfc')

    return res.status(200).json({ tfc })
  } catch (error) {
    console.error(error.message)
    res.status(500).send(error.message)
  }
}

export async function asociarAlumno(req, res) {
  try {
    const alumno = await Alumno.findByPk(req.params.idAlumno)
    if (!alumno)
      return res.status(404).json({
        message: 'Alumno no encontrado'
      })
    const tfc = await Tfc.findByPk(req.params.numeroOrden)
    if (!tfc)
      return res.status(404).json({
        message: 'Tfc no encontrado'
      })
    await tfc.setAlumno(alumno)

    return res.status(200).json({
      message: 'Alumno asociado con exito!'
    })
  } catch (error) {
    console.error(error)
    res.status(500).send(error)
  }
}
