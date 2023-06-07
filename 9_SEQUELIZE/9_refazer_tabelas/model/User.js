import { DataTypes } from "sequelize"
import db from "../db/conn.js"

const User = db.define('users', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    occupation: {
        type: DataTypes.STRING,
        required: true
    },
    newsLetter: {
        type: DataTypes.BOOLEAN,
    },

});

export default User;