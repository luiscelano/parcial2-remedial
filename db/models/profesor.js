'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profesor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Profesor.init({
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre:{
      type: DataTypes.STRING(75),
      allowNull: false
    },
    apellido:{
      type: DataTypes.STRING(80),
      allowNull: false
    },
    carnet:{
      type: DataTypes.STRING(100),
      allowNull:false
    },
    dpi:{
      type: DataTypes.BIGINT,
      allowNull: false
    },
    fechaNacimiento:{
      type: DataTypes.DATE,
      allowNull:false
    },
    telefono:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
    direccion:{
      type: DataTypes.STRING(200),
      allowNull: false
    },
    gradoAcademico:{
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Profesor',
    freezeTableName: true,
    tableName: 'Profesor',
    underscored:true
  });
  return Profesor;
};