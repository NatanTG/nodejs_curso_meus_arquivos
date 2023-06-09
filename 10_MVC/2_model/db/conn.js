import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('nodemvc2', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    sequelize.authenticate();
    console.log('Conexão estabelecida com sucesso!');
} catch (error) {
    console.log('Não foi possível conectar com o banco de dados!');
}

export default sequelize;
