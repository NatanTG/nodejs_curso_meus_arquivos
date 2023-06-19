import Tought from '../models/Tought.js';
import User from '../models/User.js';

export default class ToughtController {

    static async showToughts(req, res) {
        res.render('toughts/home');
    }

    static async dashboard(req, res) {
        const userId = req.session.userid;

        const user = await User.findOne({
            where: { id: userId },
            include: Tought,
            plain: true
        });


        //check if user exists
        if (!user) {
            res.redirect('/login');
        }

        const toughts = user.Toughts.map((result) => result.dataValues);

        let emptyToughts = false;

        if (toughts.length === 0) {
            emptyToughts = true;
        }


        res.render('toughts/dashboard', { toughts: toughts, emptyToughts: emptyToughts });
    }

    static createTought(req, res) {
        res.render('toughts/create');
    }

    static async createToughtSave(req, res) {

        const tought = {
            title: req.body.title,
            UserId: req.session.userid,
        }

        try {
            await Tought.create(tought);

            req.flash('message', 'Pensamento criado com sucesso!');

            req.session.save(() => {
                res.render('toughts/dashboard', { message: req.flash('message') });
            });
        } catch (err) {
            console.log(err);
        }
    }

    static async createToughtRemove(req, res) {
        const id = req.body.id;
        const Userid = req.session.userid;
        try {
            await Tought.destroy({ where: { id: id, UserId: Userid } });
            req.flash('message', 'Pensamento removido com sucesso!');

            req.session.save(() => {
                res.render('toughts/dashboard', { message: req.flash('message') });
            });
        } catch (err) {
            console.log(err);
        }
    }
}