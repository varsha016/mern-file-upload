
const { multiDocsUpload } = require("../utils/upload");
const multiDocs = require("./../models/doc")
exports.addDocController = async (req, res) => {
    try {
        multiDocsUpload(req, res, async (err) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    message: " multererror" + err
                })

            }

            if (req.files.dob) {
                req.body.userDob = `dob/${req.files.dob[0].filename}`
            }
            if (req.files.adhar) {
                req.body.userAdhar = `adhar/${req.files.adhar[0].filename}`
            }
            if (req.files.tc) {
                req.body.userTc = `tc/${req.files.tc[0].filename}`
            }


            console.log(req.files);
            console.log(req.file);
            const result = await multiDocs.create(req.body)
            res.json({
                success: true,
                message: "Doc upload Successfully",
            })

        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "error" + error


        })
    }
}


exports.getAllDocsController = async (req, res) => {
    try {
        const result = await multiDocs.find()
        res.json({
            success: true,
            message: "doc fetched successfully",
            result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "error" + error


        })

    }
}
exports.deleteAllDocsController = async (req, res) => {
    try {
        const result = await multiDocs.deleteMany()
        res.json({
            success: true,
            message: "delete doc successfully",
            result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "error" + error


        })

    }
}