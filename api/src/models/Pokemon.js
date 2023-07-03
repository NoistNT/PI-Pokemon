const { DataTypes } = require('sequelize')

// Model definition with sequelize connection injected
const pokemonModel = (sequelize) => {
  // Model definition
  sequelize.define(
    'pokemon',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false
      },
      hp: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      attack: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      defense: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      speed: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      height: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      weight: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { timestamps: false }
  )
}

module.exports = pokemonModel
