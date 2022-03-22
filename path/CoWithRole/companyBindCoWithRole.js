const express = require("express")
const router = express.Router()
const check = require("express-validator/check").check
const checktoken = require("../../middleware/verify_mid")
const validationResult = require("express-validator/check").validationResult
const rpcIns = require("../../ins/CompanyManIns").getInstance()
router.post("/company/CoWithRole/bind", [
    check("CompandID")
        .notEmpty()
        .isNumeric()
        .withMessage("CompandID can not be empty"),
    check("RoleID")
        .notEmpty()
        .isNumeric()
        .withMessage("RoleID can not be empty"),
    checktoken
], function (req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.json({ errors: errors.mapped() })
    }

    rpcIns.bindCompanyAndRole(req.body["CompandID"], req.body["RoleID"],(result) => {
            console.log(result)
            if (result === 1) {
                res.json({ status: 1, message: "bindCoWithRole success" })
            } else {
                res.json({ status: -1, message: "bindCoWithRole fail" })
            }
        }, (error) => {
            res.json({ status: -1, message: error })
        })
})
module.exports = router
