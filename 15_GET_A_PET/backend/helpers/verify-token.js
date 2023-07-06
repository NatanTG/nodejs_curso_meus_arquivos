import jwt from 'jsonwebtoken';
import getToken from './get-token';

//middleware to check if token is valid
const checkToken = async (req, res, next) => {
    const token = getToken(req)

    if (!req.headers.authorization) { return res.status(401).json({ error: "Acesso negado!" }) };


    if (!token) { return res.status(401).json({ error: "Acesso negado!" }) };

}

export default checkToken;