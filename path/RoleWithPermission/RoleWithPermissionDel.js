const express = require("express")
const router = express.Router()
const check = require("express-validator/check").check
const checktoken = require("../../middleware/verify_mid")
const validationResult = require("express-validator/check").validationResult
const rpcIns = require("../../ins/CompanyManIns").getInstance()
router.post("/company/RoleWithPer/unbind", [
    check("roleID")
        .notEmpty()
        .withMessage("roleID can not be empty"),

    checktoken
], function (req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.json({ errors: errors.mapped() })
    }

    rpcIns.unBindRoleAndPermissions(req.body["roleID"],(result) => {
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
