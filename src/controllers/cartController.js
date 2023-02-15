const fs = require("fs")
require("dotenv").config()
let carts;
const filePath = "src/database/carts.json"
const ProductController = require("./productController")
const productController = new ProductController()

module.exports = class CartController{
    constructor(){

    }
    async createCart(req, res){
        try {
            carts = await fs.promises.readFile(filePath, 'utf-8')
            carts = JSON.parse(carts)
            const cart = {timestamp: Date.now(), products: []}
            if(carts.length === 0){
                cart.id = 1
            }
            else{
                const lastId = carts[carts.length - 1].id
                cart.id = lastId + 1
            }
            carts.push(cart)
            await fs.promises.writeFile(filePath, JSON.stringify(carts))
            res.status(201).json({Exito: "Carrito creado con exito"})

        } catch (error) {
            console.log("Error en createCart: ", error);
        }
    }
    async deleteCart(req, res){
        try {
            const { id } = req.params
            carts = await fs.promises.readFile(filePath, 'utf-8')
            carts = JSON.parse(carts)
            if (isNaN(id)) {
                res.status(400).json({ Error: "El parametro ingresado no es un numero" })
            }
            const cart = carts.filter(filterCart => filterCart.id === Number(id))
            if (!cart) {
                res.status(404).json({ Error: "El carrito no existe" })
            }
            carts = carts.filter(filterCart => filterCart.id !== Number(id))
            await fs.promises.writeFile(filePath, JSON.stringify(carts))
            res.status(200).json(`Carrito con id : ${id} eliminado exitosamente`)
        } catch (error) {
            console.log("Error en deleteCart", error);
        }
    }
    async getCartProducts(req, res){
        try {
            const { id } = req.params
            carts = await fs.promises.readFile(filePath, 'utf-8')
            carts = JSON.parse(carts)
            if (isNaN(id)) {
                res.status(400).json({ Error: "El parametro ingresado no es un numero" })
            }
            const cart = carts.filter(filterCart => filterCart.id === Number(id))
            if (!cart) {
                res.status(404).json({ Error: "El carrito no existe" })
            }
        
            res.status(200).json({Productos: cart[0].products})
        } catch (error) {
            console.log("Error en getCartProducts", error);
        }
    }
    async addProductToCart(req, res){
        try{
            const { id, productId } = req.params
            carts = await fs.promises.readFile(filePath, 'utf-8')
            carts = JSON.parse(carts)
            if (isNaN(id)) {
                res.status(400).json({ Error: "El parametro ingresado no es un numero" })
            }
            const cart = carts.filter(filterCart => filterCart.id === Number(id))
            if (!cart) {
                res.status(404).json({ Error: "El carrito no existe" })
            }
            const product =  await productController.getById(productId)
            cart[0].products.push(product[0])
            fs.promises.writeFile(filePath, JSON.stringify(carts))
            res.status(200).json({Exito: `Producto ${product[0].nombre} agregado con exito`})
        }
        catch(error){
            console.log("Error en addProductToCart: ", error)
        }
    }
    async deleteProductFromCart(req, res){
        try {
            const { id, productId } = req.params
            carts = await fs.promises.readFile(filePath, 'utf-8')
            carts = JSON.parse(carts)
            if (isNaN(id)) {
                res.status(400).json({ Error: "El parametro ingresado no es un numero" })
            }
            const cart = carts.filter(filterCart => filterCart.id === Number(id))
            if (!cart[0]) {
                res.status(404).json({ Error: "El carrito no existe" })
            }
            const product =  await productController.deleteByIdFromCart(productId)
            cart[0].products = cart[0].products.filter(filterProduct => filterProduct.id !== Number(productId))
            const index = carts.findIndex(cartIndex => cartIndex.id === Number(id))
            carts[index] = cart[0]
            fs.promises.writeFile(filePath, JSON.stringify(carts))
            res.status(200).json({Exito: `Producto ${product.nombre} eliminado con exito`})
        } catch (error) {
            
        }
    }
}
