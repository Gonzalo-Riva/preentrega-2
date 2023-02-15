const { Router } = require("express")
const router = Router()

router.get("/", (req, res)=> {
    res.json({Error: "La ruta buscada no existe"})
})
router.post("/", (req, res)=> {
    res.json({Error: "La ruta buscada no existe"})
})
router.put("/", (req, res)=> {
    res.json({Error: "La ruta buscada no existe"})
})
router.get("/", (req, res)=> {
    res.json({Error: "La ruta buscada no existe"})
})

module.exports= router