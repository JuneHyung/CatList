const Sequelize = require('sequelize');

class Charc extends Sequelize.Model {
  static initiate(sequelize){
    Charc.init({
      charc_id:{
        type: Sequelize.STRING(45),
        primaryKey: true,
        allowNull: false,
      },
      extrovert:{
        type: Sequelize.INTEGER,
      },
      introvert:{
        type: Sequelize.INTEGER,
      },
      curious:{
        type: Sequelize.INTEGER,
      },
      tranquil:{
        type: Sequelize.INTEGER,
      },
      independence:{
        type: Sequelize.INTEGER,
      },
      friendly:{
        type: Sequelize.INTEGER,
      },
    }, {
      sequelize,
      timestamps: false,
      underscored:false,
      modelName: 'Charc',
      tableName: 'charc',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.Charc.belongsTo(db.Cat, {foreignKey: 'charc_id', sourceKey: 'charc_id' })
  }
}

module.exports = Charc;