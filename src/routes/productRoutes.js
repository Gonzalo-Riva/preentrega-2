const { Router } = require("express")
const router = Router()
const ProductClass = require("../controllers/productController")
const productController = new ProductClass("../database/product.json")


router.get("/", productController.getAll)
router.post("/", productController.addProduct)
router.put("/:id", productController.updateProduct)
router.delete("/:id", productController.deleteById)





module.exports = router