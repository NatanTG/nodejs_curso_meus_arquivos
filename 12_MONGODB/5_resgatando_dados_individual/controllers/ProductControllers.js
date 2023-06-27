import Products from '../models/Products.js';

export default class ToughController {
    static async showProducts(req, res) {
        const products = await Products.getProducts()

        console.log(products)

        res.render('products/all', { products })
    }

    static createProduct(req, res) {
        res.render('products/create')
    }

    static async createProductPost(req, res) {
        const name = req.body.name
        const price = req.body.price
        const description = req.body.description
        const image = req.body.image

        const product = new Products(name, price, description, image)

        await product.save()

        res.redirect('/')
    }

    static async getProduct(req, res) {
        const id = req.params.id

        const product = await Products.getProductById(id)

        res.render('products/product', { product })
    }

}