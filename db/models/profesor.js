'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Profesor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Profesor.hasMany(models.Alumno, {
        as: 'alumnos',
        foreignKey: {
          name: 'profesor_id',
          allowNull: true
        }
      })
      Profesor.belongsToMany(models.Comite, { through: 'comites_asignados', as: 'comites' })
    }
  }
  Profesor.init(
    {
      profesorId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        key: 'profesor_id'
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
      },
      gradoAcademico: {
        type: DataTypes.STRING(100),
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Profesor',
      freezeTableName: true,
      tableName: 'profesor',
      underscored: true
    }
  )
  return Profesor
}
