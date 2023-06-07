import Sequelize from 'sequelize';

const sequelize = new Sequelize('nodesequelize2', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'

})

try {
    sequelize.authenticate();
    console.log('Conexão com o banco de dados realizada com sucesso!');
} catch (error) {
    console.error('Não foi possível conectar com o banco de dados: ', error);
}

export default sequelize;