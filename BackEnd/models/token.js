const Sequelize = require('sequelize');

class Token extends Sequelize.Model{
  static initiate(sequelize){
    Token.init({
      token_id: {
        type: Sequelize.STRING(200),
        primaryKey:true,
        allowNull: false,
      },
      token: {
        type: Sequelize.STRING(500),
      },
      user_id:{
        type: Sequelize.STRING(20),
      }
    },{
      sequelize,
      timestamps: false,
      underscored:false,
      modelName: 'Token',
      tableName: 'tokens',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    })
  }
  static associate(db) {
    db.Token.belongsTo(db.User, {foreignKey: 'user_id', targetKey: 'user_id', onDelete: 'CASCADE', onUpdate: 'CASCADE'  })
  }
}

module.exports = Token;

