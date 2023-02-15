const { Router } = require("express")
const router = Router()
const CartController = require("../controllers/cartController")
const cartController = new CartController()

router.post("/", cartController.createCart)
router.delete("/:id", cartController.deleteCart)
router.get("/:id/productos", cartController.getCartProducts)
router.post("/:id/productos/:productId", cartController.addProductToCart)
router.delete("/:id/productos/:productId", cartController.deleteProductFromCart)


module.exports = router