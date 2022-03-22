const express = require("express")
const router = express.Router()
const check = require("express-validator/check").check
const checktoken = require("../../middleware/verify_mid")
const validationResult = require("express-validator/check").validationResult
const rpcIns = require("../../ins/CompanyManIns").getInstance()
router.post("/company/del", [
    check("CompanyID")
        .notEmpty()
        .withMessage("CompanyID can not be empty"),
    checktoken
], function (req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.json({ errors: errors.mapped() })
    }

    rpcIns.deleteCompany(req.body["CompanyID"],(result) => {
            console.log(result)
            if (result === 1) {
                res.json({ status: 1, message: "del success" })
            } else {
                res.json({ status: -1, message: "del fail" })
            }
        }, (error) => {
            res.json({ status: -1, message: error })
        })
})
module.exports = router
