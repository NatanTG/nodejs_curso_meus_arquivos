import User from "../models/User.js";
import Joi from 'joi';
import bcrypt from 'bcrypt';
import createUserToken from '../helpers/create-user-token.js';

export default class UserController {
    static async register(req, res) {
        const { name, email, phone, password, confirmpassword } = req.body
        const schema = Joi.object({
            name: Joi.string().required().label('Nome'),
            email: Joi.string().required().label('Email'),
            phone: Joi.string().required().label('Telefone'),
            password: Joi.string().required().label('Senha'),
            confirmpassword: Joi.string().valid(Joi.ref('password')).required().label('Confirmação de Senha').messages({
                'any.only': '{{#label}} não é a mesma que a senha',
            }),
        });

        try {
            await schema.validateAsync(req.body);
            // A validação passou, continue com o processamento
            // ...
        } catch (error) {
            // A validação falhou, retorne a mensagem de erro
            res.status(422).json({ message: error.details[0].message });
            return
        }

        //check if user exists
        const userExists = await User.findOne({ email: email })

        if (userExists) {
            res.status(422).json({ message: 'Por favor, utilize outro e-mail!' })
            return
        }

        //create password
        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password, salt)

        // create user
        const user = new User({
            name,
            email,
            phone,
            password: passwordHash,
        })

        try {
            const newUser = await user.save()
            await createUserToken(newUser, req, res)
        } catch (error) {
            res.status(500).json({ message: error })
        }
    }
}



