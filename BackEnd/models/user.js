const Sequelize = require('sequelize');

class User extends Sequelize.Model{
  static initiate(sequelize){
    User.init({
      user_id: {
        type: Sequelize.STRING(20),
        primaryKey: true,
        allowNull: false,
      },
      user_name: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      authStatus: {
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: '1',
      },
      authToken: {
        type: Sequelize.STRING(500),
        defaultValue: null,
      },
    }, {
      sequelize,
      timestamps: false,
      underscored:false,
      modelName: 'User',
      tableName: 'users',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    })
  }
  static associate(db) {
    db.User.hasOne(db.Token, {foreignKey: 'user_id', sourceKey: 'user_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    db.User.hasMany(db.Todo, {foreignKey: 'user_id', sourceKey: 'user_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    db.User.hasMany(db.Cat, {foreignKey: 'user_id', sourceKey: 'user_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    
  }
}

module.exports = User;