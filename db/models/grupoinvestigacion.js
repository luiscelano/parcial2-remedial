'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class GrupoInvestigacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      GrupoInvestigacion.hasMany(models.Alumno, {
        as: 'alumnos',
        foreignKey: { name: 'no_grupo', allowNull: true }
      })
    }
  }
  GrupoInvestigacion.init(
    {
      noGrupo: {
        type: DataTypes.INTEGER,
        key: 'no_grupo',
        allowNull: false,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      nombre: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'GrupoInvestigacion',
      freezeTableName: true,
      tableName: 'grupo_investigacion',
      underscored: true
    }
  )
  return GrupoInvestigacion
}
