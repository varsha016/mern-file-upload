
const { avatarUpload, galleryUpload } = require("../utils/upload")
const user = require("./../models/user")
const model = require("./../models/user")
exports.addAvatar = async (req, res) => {
    try {

        avatarUpload(req, res, async (err) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    massege: "multer error" + err

                })
            }
            console.log(req.body);
            console.log(req.file.filename);
            const result = await user.create({
                ...req.body,
                profile: `profile/${req.file.filename}`
            })
            res.json({
                success: true,
                message: "avatar add successfully",
                result

            })

        })

    } catch (error) {
        res.status(400).json({
            success: false,
            massege: "multer error" + error

        })
    }
}
exports.addToGallery = async (req, res) => {
    try {

        galleryUpload(req, res, async (err) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    massege: "multer error" + err

                })
            }
            console.log(req.body);
            console.log(req.files);
            const d = []
            for (let i = 0; i < req.files.length; i++) {
                d.push(`gallery/${req.files[i].filename}`)
            }
            const result = await user.create({
                ...req.body,
                docs: d
            })
            res.json({
                success: true,
                message: "avatar add successfully",
                result

            })

        })

    } catch (error) {
        res.status(400).json({
            success: false,
            massege: "multer error" + error

        })
    }
}
exports.getAllUsers = async (req, res) => {
    try {
        const result = await user.find()

        res.json({
            success: true,
            message: "user Fetch successfully",
            result

        })

    } catch (error) {
        res.status(400).json({
            success: false,
            massege: "get user error" + error

        })
    }
}
exports.destroyAllUsers = async (req, res) => {
    try {
        const result = await user.deleteMany()

        res.json({
            success: true,
            message: "delete All Users successfully",
            result

        })

    } catch (error) {
        res.status(400).json({
            success: false,
            massege: "delete error" + error

        })
    }
}
exports.getAvatar = async (req, res) => {
    try {
        const result = await user.find()
        res.json({
            success: true,
            message: "avatar fetched successfully",
            result

        })

    } catch (error) {
        res.status(400).json({
            success: false,
            massege: "multer error" + error

        })
    }
}