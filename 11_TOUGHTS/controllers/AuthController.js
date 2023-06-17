
import User from '../models/User.js';
import bcrypt from 'bcryptjs';

export default class AuthController {


    static login(req, res) {
        res.render('auth/login');
    }
    static async loginPost(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email: email } });

        if (!user) {
            req.flash('message', 'Email ou senha incorretos!');
            res.render('auth/login');
            return
        }

        //check password
        const passwordMatch = bcrypt.compareSync(password, user.password);

        if (!passwordMatch) {
            req.flash('message', 'Email ou senha incorretos!');
            res.render('auth/login');
            return
        }
        const createdUser = await User.create(user);
        req.session.userid = createdUser.id;


        req.session.save(() => {
            res.redirect('/');
        });
    }
    static register(req, res) {
        res.render('auth/register');
    }

    static async registerPost(req, res) {
        const { name, email, password, confirmpassword } = req.body;

        if (password !== confirmpassword) {
            req.flash('message', 'As senhas estão diferentes!');
            res.redirect('/register');
            return;
        }


        // Check if user exists
        const checkIfUserExists = await User.findOne({ where: { email: email } });
        if (checkIfUserExists) {
            req.flash('message', 'Email já cadastrado!');
            res.redirect('/register');
            return;
        }

        // Encrypt password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const user = {
            name,
            email,
            password: hashedPassword,
        };
        try {
            const createdUser = await User.create(user);

            //inicio da sessão
            req.session.userid = createdUser.id;

            req.flash('message', 'Usuário cadastrado com sucesso!');
            req.session.save(() => {
                res.redirect('/');
            });

        } catch (err) {
            console.log(err);
        }
    }

    static logout(req, res) {
        req.session.destroy();
        res.redirect('/login');
    }


}
