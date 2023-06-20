import Tought from '../models/Tought.js';
import User from '../models/User.js';
import Op from 'sequelize';

export default class ToughtController {

    static async showToughts(req, res) {
        let search = ''
        // if (req.query.search) {
        //     search = req.query.search;
        // }

        // const toughtsData = await Tought.findAll({ include: User, where: { [Op.like]: `%${search}%` } });

        let whereCondition = {};
        if (search) {
            whereCondition = { [Op.like]: `%${search}%` };
        }

        const toughtsData = await Tought.findAll({ include: User, where: whereCondition });

        const toughts = toughtsData.map((result) => result.get({ plain: true }));

        let toughtsQty = toughts.length;

        if (toughtsQty === 0) {
            toughtsQty = false;
        }

        res.render('toughts/home', { toughts, toughtsQty, search });
    }

    static async dashboard(req, res) {
        const userId = req.session.userid;

        const user = await User.findOne({
            where: { id: userId },
            include: Tought,
            plain: true
        });

        // Check if user exists
        if (!user) {
            res.redirect('/login');
        }

        const toughts = user.Toughts.map((result) => result.dataValues);

        let emptyToughts = false;

        if (toughts.length === 0) {
            emptyToughts = true;
        }

        const message = req.flash('message');

        res.render('toughts/dashboard', { toughts: toughts, emptyToughts: emptyToughts, message: message });
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
                res.redirect('/toughts/dashboard');
            });
        } catch (err) {
            console.log('o erro foi: ' + err);
        }
    }

    static async createToughtRemove(req, res) {
        const id = req.body.id;
        const Userid = req.session.userid;
        try {
            await Tought.destroy({ where: { id: id, UserId: Userid } });
            req.flash('message', 'Pensamento removido com sucesso!');

            req.session.save(() => {
                res.redirect('/toughts/dashboard');
            });
        } catch (err) {
            console.log(err);
        }
    }

    static async updateTought(req, res) {
        const id = req.params.id;

        const tought = await Tought.findOne({ where: { id: id }, raw: true });

        console.log(tought);

        res.render('toughts/edit', { tought: tought });
    }

    static async updateToughtSave(req, res) {
        const id = req.body.id;

        const tought = {
            title: req.body.title,
        }

        try {
            await Tought.update(tought, { where: { id: id } });

            req.flash('message', 'Pensamento atualizado com sucesso!');

            req.session.save(() => {
                res.redirect('/toughts/dashboard');
            });
        } catch (err) {
            console.log(err);
        }
    }
}