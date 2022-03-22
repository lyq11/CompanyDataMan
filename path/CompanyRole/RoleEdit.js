const express = require("express")
const router = express.Router()
const check = require("express-validator/check").check
const checktoken = require("../../middleware/verify_mid")
const validationResult = require("express-validator/check").validationResult
const rpcIns = require("../../ins/CompanyManIns").getInstance()
router.post("/company/role/edit", [
    check("id")
        .notEmpty()
        .withMessage("id can not be empty"),
    checktoken
], function (req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.json({ errors: errors.mapped() })
    }
    let data = {}
    if ("id" in req.body){
        data.id  = req.body["id"]
    }
    if ("roleName" in req.body){
        data.roleName  = req.body["roleName"]
    }
    if ("summarize" in req.body){
        data.summarize =req.body["summarize"]
    }

    rpcIns.updateRole(data,(result) => {
            console.log(result)
            if (result === 1) {
                res.json({ status: 1, message: "edit success" })
            } else {
                res.json({ status: -1, message: "edit fail" })
            }
        }, (error) => {
            res.json({ status: -1, message: error })
        })
})
module.exports = router
