import Products from '../models/Products.js';

export default class ProductControllers {
    static showProducts(req, res) {
        res.render('products/all');
    }
}   