const Sequelize = require('sequelize');

class Kind extends Sequelize.Model {
  static initiate(sequelize){
    Kind.init({
      kind_code:{
        type: Sequelize.STRING(45),
        primaryKey: true,
        allowNull: false,
      },
      kind_name:{
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      kind_profile:{
        type: Sequelize.STRING(200),
      },
      kind_form:{
        type: Sequelize.STRING(45),
      },
      kind_fur:{
        type: Sequelize.STRING(45),
      },
      kind_fur_pattern:{
        type: Sequelize.STRING(45),
      },
    }, {
      sequelize,
      timestamps: false,
      underscored:false,
      modelName: 'Kind',
      tableName: 'kind',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_cli',
    });
  }

  static associate(db) {}
}

module.exports = Kind;