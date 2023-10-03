'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Comite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comite.belongsToMany(models.Profesor, { as: 'profesores', through: 'ComitesAsignados' })
    }
  }
  Comite.init(
    {
      comiteId: {
        key: 'comite_id',
        unique: true,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        type: DataTypes.INTEGER
      },
      noSerie: {
        key: 'no_serie',
        unique: true,
        allowNull: false,
        type: DataTypes.INTEGER
      },
      lugar: DataTypes.STRING,
      fechaFormacion: {
        key: 'fecha_formacion',
        type: DataTypes.DATE
      },
      noIntegrantes: {
        key: 'no_integrantes',
        type: DataTypes.INTEGER
      }
    },
    {
      sequelize,
      modelName: 'Comite',
      freezeTableName: true,
      tableName: 'comite',
      underscored: true
    }
  )
  return Comite
}
