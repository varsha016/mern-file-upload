const multer = require("multer")
const { v4: uuid } = require("uuid")
const path = require("path")
const fs = require("fs")

const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        const allowedExt = [".png", ".jpg", ".jpeg"]
        if (!allowedExt.includes(ext)) {
            cb("Invalid extention")
        }
        const fn = uuid() + ext
        cb(null, fn)
    },
    destination: (req, file, cb) => {
        const loc = "public/profile"
        fs.mkdirSync(loc, { recursive: true })
        cb(null, loc)
    }
})
const multistorage = multer.diskStorage({
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        const allowedExt = [".png", ".jpg", ".jpeg", "pdf"]
        if (!allowedExt.includes(ext)) {
            cb("Invalid extention")
        }
        const fn = uuid() + ext
        cb(null, fn)
    },
    destination: (req, file, cb) => {
        const loc = "public/gallery"
        fs.mkdirSync(loc, { recursive: true })
        cb(null, loc)
    }
})
const multiDocsStorage = multer.diskStorage({
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        const allowedExt = [".png", ".jpg", ".jpeg", "pdf"]
        if (!allowedExt.includes(ext)) {
            cb("Invalid extention")
        }
        const fn = uuid() + ext
        cb(null, fn)
    },
    destination: (req, file, cb) => {
        let loc
        if (file.fieldname === "dob") {
            loc = "public/dob"
        }
        if (file.fieldname === "adhar") {
            loc = "public/adhar"
        }
        if (file.fieldname === "tc") {
            loc = "public/tc"
        }

        // const loc = "public/docs"
        fs.mkdirSync(loc, { recursive: true })
        cb(null, loc)
    }
})

exports.avatarUpload = multer({ storage, limits: { fileSize: "1mb" } }).single("avatar")
exports.galleryUpload = multer({ storage: multistorage, limits: { fileSize: "1mb" } }).array("doc", 5)
exports.multiDocsUpload = multer({ storage: multiDocsStorage, limits: { fileSize: "1mb" } }).fields([
    { name: "dob", maxCount: 1 },
    { name: "adhar", maxCount: 1 },
    { name: "tc", maxCount: 1 }
])