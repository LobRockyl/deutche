

module.exports = (sequelize, DataTypes) => {
    const Article = sequelize.define(
      'Article',
      {
        creator_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        creator_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        text: {
          type: DataTypes.STRING,
        },
        isDraft: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
        isPublished: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
        
      },
    );
    Article.associate = function (models) {
      // associations can be defined here
    };
    return Article;
  };
  