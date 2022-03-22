const express = require("express")
const router = express.Router()
const check = require("express-validator/check").check
const checktoken = require("../../middleware/verify_mid")
const validationResult = require("express-validator/check").validationResult
const rpcIns = require("../../ins/CompanyManIns").getInstance()
router.post("/company/RoleWithPer/bind", [
    check("roleID")
        .notEmpty()
        .isNumeric(),
    check("permissionID")
        .notEmpty()
        .isNumeric(),
    checktoken
], function (req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.json({ errors: errors.mapped() })
    }

    rpcIns.bindRoleAndPermissions(req.body["roleID"], req.body["permissionID"],(result) => {
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
