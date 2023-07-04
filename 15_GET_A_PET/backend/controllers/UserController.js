import User from "../models/User.js";
import Joi from 'joi';

export default class UserController {
    static async register(req, res) {
        const schema = Joi.object({
            name: Joi.string().required().label('Nome'),
            email: Joi.string().email().required().label('Email'),
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
        }

        //check if user exists
        const userExists = await User.findOne({ email: email })

        if (userExists) {
            res.status(422).json({ message: 'Por favor, utilize outro e-mail!' })
            return
        }

        //
    }
}


