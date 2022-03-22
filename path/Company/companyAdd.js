const express = require("express")
const router = express.Router()
const check = require("express-validator/check").check
const checktoken = require("../../middleware/verify_mid")
const validationResult = require("express-validator/check").validationResult
const rpcIns = require("../../ins/CompanyManIns").getInstance()
router.post("/company/add", [
    check("name")
        .notEmpty()
        .withMessage("name can not be empty"),
    check("address")
        .notEmpty()
        .withMessage("address can not be empty"),
    check("contact")
        .isNumeric()
        .withMessage("address can not be empty"),
    check("email")
        .isEmail()
        .withMessage("address can not be empty"),
    checktoken
], function (req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.json({ errors: errors.mapped() })
    }
    rpcIns.createCompany(req.body["name"], req.body["address"],req.body["contact"],req.body["email"],(result) => {
            console.log(result)
            if (result === 1) {
                res.json({ status: 1, message: "add success" })
            } else {
                res.json({ status: -1, message: "add fail" })
            }
        }, (error) => {
            res.json({ status: -1, message: error })
        })
})
module.exports = router
