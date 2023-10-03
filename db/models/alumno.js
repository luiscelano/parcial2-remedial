'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Alumno extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Alumno.belongsTo(models.Tfc, { foreignKey: { name: 'tfc_id', allowNull: false }, as: 'tfc' })
      Alumno.belongsTo(models.GrupoInvestigacion, {
        foreignKey: { name: 'grupo_id', allowNull: false },
        as: 'grupoInvestigacion'
      })
      Alumno.belongsTo(models.Profesor, {
        foreignKey: {
          name: 'profesor_id',
          allowNull: false
        },
        as: 'profesores'
      })
    }
  }
  Alumno.init(
    {
      alumnoId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        key: 'alumno_id'
      },
      nombre: {
        type: DataTypes.STRING(75),
        allowNull: false
      },
      apellido: {
        type: DataTypes.STRING(80),
        allowNull: false
      },
      carnet: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      dpi: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      fechaNacimiento: {
        type: DataTypes.DATE,
        allowNull: false
      },
      telefono: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      direccion: {
        type: DataTypes.STRING(200),
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Alumno',
      freezeTableName: true,
      tableName: 'alumno',
      underscored: true
    }
  )
  return Alumno
}
