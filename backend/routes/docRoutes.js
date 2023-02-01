const { addDocController, getAllDocsController, deleteAllDocsController } = require("../controller/docController")

const router = require("express").Router()
router
    .post("/add", addDocController)
    .get("/", getAllDocsController)
    .delete("/delete", deleteAllDocsController)
module.exports = router