const express = require("express")
const router = express.Router()
const check = require("express-validator/check").check
const checktoken = require("../../middleware/verify_mid")
const validationResult = require("express-validator/check").validationResult
const rpcIns = require("../../ins/CompanyManIns").getInstance()
router.post("/company/CoWithRole/unbind", [
    check("CompangHasRoleID")
        .notEmpty()
        .withMessage(" can not be empty"),
    checktoken
], function (req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.json({ errors: errors.mapped() })
    }

    rpcIns.queryCompanyRoleByCondition(req.body["CompangHasRoleID"],(result) => {
            console.log(result)
            if (result === 1) {
                res.json({ status: 1, message: "companyUnbindCowithRole success" })
            } else {
                res.json({ status: -1, message: "companyUnbindCowithRole fail" })
            }
        }, (error) => {
            res.json({ status: -1, message: error })
        })
})
module.exports = router
