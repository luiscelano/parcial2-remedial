'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Tfc extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tfc.hasOne(models.Alumno, { foreignKey: { name: 'tfc_id', allowNull: false } });
    }
  }
  Tfc.init(
    {
      numeroOrden: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      tema: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      fechaInicio: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Tfc',
      freezeTableName: true,
      tableName: 'tfc',
      underscored: true
    }
  )
  return Tfc
}
