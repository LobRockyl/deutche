module.exports = {
    up: (queryInterface, Sequelize) => Promise.all([
      queryInterface.addColumn('Users', 'isSuperAdmin', {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      }),
      
    ]),
  
    
  };