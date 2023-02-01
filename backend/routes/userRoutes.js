const { addAvatar, getAvatar, addToGallery, getAllUsers, destroyAllUsers } = require("../controller/userController")

const router = require("express").Router()
router
    .get("/", getAvatar)
    .post("/add", addAvatar)
    .post("/add-to-gallery", addToGallery)
    .get("/fetch", getAllUsers)
    .delete("/destroy", destroyAllUsers)

module.exports = router