import Products from '../models/Products.js';

export default class ToughController {
    static async showProducts(req, res) {
        const products = await Products.getProducts()

        res.render('products/all', { products })
    }

    static createProduct(req, res) {
        res.render('products/create')
    }

    static createProductPost(req, res) {
        const name = req.body.name
        const price = req.body.price
        const description = req.body.description
        const image = req.body.image

        const product = new Products(name, price, description, image)

        product.save()

        res.redirect('/')
    }

    static async getProduct(req, res) {
        try {
            const id = req.params.id;

            const product = await Products.getProductById(id);

            if (!product) {
                res.status(404).send('Produto não encontrado');
            } else {
                res.render('products/product', { product });
            }
        } catch (error) {
            console.log(error);
            res.status(500).send('Ocorreu um erro ao buscar o produto');
        }
    }

    static removeProduct(req, res) {
        const id = req.params.id

        Products.removeProduct(id)

        res.redirect('/')
    }

    static async editProduct(req, res) {
        const id = req.params.id

        const product = await Products.getProductById(id)

        res.render('products/edit', { product })
    }
}