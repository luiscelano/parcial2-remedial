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
      // define association here
    }
  }
  GrupoInvestigacion.init(
    {
      noGrupo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        key: 'no_grupo',
        allowNull: false
      },
      nombre: DataTypes.STRING,
      noAlumnos: {
        type: DataTypes.INTEGER,
        key: 'no_alumnos'
      }
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
