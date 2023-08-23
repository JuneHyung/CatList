const Sequelize = require('sequelize');
const Kind = require('./kind');

class Cat extends Sequelize.Model {
  static initiate(sequelize){
    Cat.init({
      cat_code:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      cat_name:{
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      cat_age:{
        type: Sequelize.INTEGER,
      },
      kind_code:{
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      description:{
        type: Sequelize.STRING(200),
      },
      create_date:{
        type: Sequelize.STRING(45),
      },
      profile:{
        type: Sequelize.STRING(45),
      },
      address:{
        type: Sequelize.STRING(45),
      },
      charc_id:{
        type: Sequelize.STRING(45),
      },
      see:{
        type: Sequelize.INTEGER,
      },
    }, {
      sequelize,
      timestamps: false,
      underscored:false,
      modelName: 'Cat',
      tableName: 'cat',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.Cat.hasOne(db.Kind, {foreignKey: 'kind_code', sourceKey: 'kind_code' })
  }
}

module.exports = Cat;