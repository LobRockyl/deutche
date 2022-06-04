module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('Article', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      creator_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    creator_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    text: {
      type: Sequelize.STRING,
    },
    isDraft: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    isPublished: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }),
    
  };