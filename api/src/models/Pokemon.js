const { DataTypes } = require('sequelize')

// Export Model definition
// Then inject the sequelize connection
module.exports = (sequelize) => {
  // Model definition
  sequelize.define(
    'pokemon',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { timestamps: false }
  )
}
