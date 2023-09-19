const Sequelize = require('sequelize');

class Todo extends Sequelize.Model {
  static initiate(sequelize){
    Todo.init({
      todo_id:{
        type: Sequelize.STRING(45),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      title:{
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      content:{
        type: Sequelize.STRING(255),
      },
      start:{
        type: Sequelize.DATE,
      },
      end:{
        type: Sequelize.DATE,
      },
      status:{
        type: Sequelize.STRING(20),
      },
    }, {
      sequelize,
      timestamps: false,
      underscored:false,
      modelName: 'Todo',
      tableName: 'todo',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
}

module.exports = Todo;