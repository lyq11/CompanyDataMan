const Tars = require("@tars/rpc").client
const TarsRPC = require("../proxy/CompanyManProcessProxy").CivetCompanyCenter

class CompanyManIns {
    proxy = null

    constructor() {
        // Tars.setProperty("locator", "tars.tarsregistry.QueryObj@tcp -h 172.25.0.3 -t 60000 -p 17890")
        this.proxy = Tars.stringToProxy(TarsRPC.CompanyManProcessProxy, "CivetCompanyCenter.CompanyManServer.CompanyManProcessObj")
    }

    static getInstance() {
        if (!CompanyManIns.instance) {
            CompanyManIns.instance = new CompanyManIns()
        }
        return CompanyManIns.instance
    }
    // int createCompany(Company newCompany,out int result);
    // eslint-disable-next-line max-params
    createCompany(name,address,contact,email,success,fail){
        let newCompany = new TarsRPC.Company()
        newCompany.readFromObject({
            name:name,
            address:address,
            contact:contact,
            email:email,
            }
        )
    this.proxy.createCompany(newCompany).then((data) => {
                console.log("baohande", data.response.arguments)
                console.log("调用耗时", data.response.costtime)
                console.log("STRING:", data.response.arguments.result)
                success(data.response.arguments.result)
            }).catch((e) => {
                console.log("框架错误码：", e.response.error.code)
                console.log("框架错误信息：", e.response.error.message)
                console.log("调用耗时", e.response.costtime)
                fail(e.response.error.message)
            })
    }
    // int deleteCompany(int CompanyID,out int result);
    deleteCompany(CompanyID,success,fail){
    this.proxy.deleteCompany(CompanyID).then((data) => {
                console.log("baohande", data.response.arguments)
                console.log("调用耗时", data.response.costtime)
                console.log("STRING:", data.response.arguments.result)
                success(data.response.arguments.result)
            }).catch((e) => {
                console.log("框架错误码：", e.response.error.code)
                console.log("框架错误信息：", e.response.error.message)
                console.log("调用耗时", e.response.costtime)
                fail(e.response.error.message)
            })
    }
    // int updateCompany(Company Company,string keys,string value,out int result);
    updateCompany(company,success,fail){
        console.log(company)
        let newCompany = new TarsRPC.Company()
        newCompany.readFromObject(company
        )
    this.proxy.updateCompany(newCompany,"id",company.id).then((data) => {
                console.log("baohande", data.response.arguments)
                console.log("调用耗时", data.response.costtime)
                console.log("STRING:", data.response.arguments.result)
                success(data.response.arguments.result)
            }).catch((e) => {
                console.log("框架错误码：", e.response.error.code)
                console.log("框架错误信息：", e.response.error.message)
                console.log("调用耗时", e.response.costtime)
                fail(e.response.error.message)
            })
    }
    // int queryCompany(int offset,int limit,out vector<Company> Companys,out int count,out int result);
    queryCompany(offset,limit,success,fail){
    this.proxy.queryCompany(offset,limit).then((data) => {
                console.log("baohande", data.response.arguments)
                console.log("调用耗时", data.response.costtime)
                console.log("STRING:", data.response.arguments.result)
                success(data.response.arguments.result,data.response.arguments.Companys.value,data.response.arguments.count)
            }).catch((e) => {
                console.log("框架错误码：", e.response.error.code)
                console.log("框架错误信息：", e.response.error.message)
                console.log("调用耗时", e.response.costtime)
                fail(e.response.error.message)
            })
    }
    // int queryCompanyByCondition(int offset,int limit,string keys,string value,out vector<Company> Companys,out int count,out int result);
    queryCompanyByCondition(offset,limit,keys,value,success,fail){
    this.proxy.queryCompanyByCondition(offset,limit,keys,value).then((data) => {
                console.log("baohande", data.response.arguments)
                console.log("调用耗时", data.response.costtime)
                console.log("STRING:", data.response.arguments.result)
                success(data.response.arguments.result,data.response.arguments.Companys.value,data.response.arguments.count)
            }).catch((e) => {
                console.log("框架错误码：", e.response.error.code)
                console.log("框架错误信息：", e.response.error.message)
                console.log("调用耗时", e.response.costtime)
                fail(e.response.error.message)
            })
    }
    // int bindCompanyAndRole(CompanyHasRole newCompanyHasRole,out int result);
    bindCompanyAndRole(Company_id,Role_id,success,fail){
     let newAdd = new TarsRPC.CompanyHasRole()
         newAdd.readFromObject({
                Company_id :Company_id,
                Role_id :Role_id,
                create_time : 0,
                uni_id : Company_id + "&" + Role_id
                }
            )
    this.proxy.bindCompanyAndRole(newAdd).then((data) => {
                console.log("baohande", data.response.arguments)
                console.log("调用耗时", data.response.costtime)
                console.log("STRING:", data.response.arguments.result)
                success(data.response.arguments.result)
            }).catch((e) => {
                console.log("框架错误码：", e.response.error.code)
                console.log("框架错误信息：", e.response.error.message)
                console.log("调用耗时", e.response.costtime)
                fail(e.response.error.message)

            })
    }
    // int unBindCompanyAndRole(int CompanyHasRoleID,out int result);
     unBindCompanyAndRole(CompangHasRoleID,success,fail){

     this.proxy.unBindCompanyAndRole(CompangHasRoleID).then((data) => {
                 console.log("baohande", data.response.arguments)
                 console.log("调用耗时", data.response.costtime)
                 console.log("STRING:", data.response.arguments.result)
                 success(data.response.arguments.result)
             }).catch((e) => {
                 console.log("框架错误码：", e.response.error.code)
                 console.log("框架错误信息：", e.response.error.message)
                 console.log("调用耗时", e.response.costtime)
                 fail(e.response.error.message)
             })
     }

    // int queryCompanyRole(int offset,int limit,out vector<CompanyHasRole> Companys,out int count,out int result);
    queryCompanyRole(offset, limit, success, fail) {
        this.proxy.queryCompanyRole(offset, limit).then((data) => {
            console.log("baohande", data.response.arguments)
            console.log("调用耗时", data.response.costtime)
            console.log("STRING:", data.response.arguments.result)
            success(data.response.arguments.result, data.response.arguments.Companys.value, data.response.arguments.count)
        }).catch((e) => {
            console.log("框架错误码：", e.response.error.code)
            console.log("框架错误信息：", e.response.error.message)
            console.log("调用耗时", e.response.costtime)
            fail(e.response.error.message)
        })
    }
    // int queryCompanyRoleByCondition(int offset,int limit,string keys,string value,out vector<CompanyHasRole> binds,out int count,out int result);
    queryCompanyRoleByCondition(offset,limit,key,value,success,fail){
    this.proxy.queryCompanyRoleByCondition(offset,limit,key,value).then((data) => {
                console.log("baohande", data.response.arguments)
                console.log("调用耗时", data.response.costtime)
                console.log("STRING:", data.response.arguments.result)
                success(data.response.arguments.result,data.response.arguments.binds.value,data.response.arguments.count)
            }).catch((e) => {
                console.log("框架错误码：", e.response.error.code)
                console.log("框架错误信息：", e.response.error.message)
                console.log("调用耗时", e.response.costtime)
                fail(e.response.error.message)
            })
    }
    // int createRole(Role newRole,out int c);
    createRole(roleName,summarize, success, fail) {
        let newAdd = new TarsRPC.Role()
        newAdd.readFromObject({
            roleName : roleName,
            summarize : summarize,
            }
        )
        this.proxy.createRole(newAdd).then((data) => {
            console.log("baohande", data.response.arguments)
            console.log("调用耗时", data.response.costtime)
            console.log("STRING:", data.response.arguments.c)
            success(data.response.arguments.c)
        }).catch((e) => {
            console.log("框架错误码：", e.response.error.code)
            console.log("框架错误信息：", e.response.error.message)
            console.log("调用耗时", e.response.costtime)
            fail(e.response.error.message)
        })
    }
    // int deleteRole(int roleID,out int result);
     deleteRole(roleID,success,fail){

     this.proxy.deleteRole(roleID).then((data) => {
                 console.log("baohande", data.response.arguments)
                 console.log("调用耗时", data.response.costtime)
                 console.log("STRING:", data.response.arguments.result)
                 success(data.response.arguments.result)
             }).catch((e) => {
                 console.log("框架错误码：", e.response.error.code)
                 console.log("框架错误信息：", e.response.error.message)
                 console.log("调用耗时", e.response.costtime)
                 fail(e.response.error.message)
             })
     }

    // int updateRole(Role role,string keys,string value,out int result);
    updateRole(role, success, fail) {
        let newupdate = new TarsRPC.Role()
        newupdate.readFromObject(
            role
        )
        this.proxy.updateRole(newupdate, "id", newupdate.id).then((data) => {
            console.log("baohande", data.response.arguments)
            console.log("调用耗时", data.response.costtime)
            console.log("STRING:", data.response.arguments.result)
            success(data.response.arguments.result)

        }).catch((e) => {
            console.log("框架错误码：", e.response.error.code)
            console.log("框架错误信息：", e.response.error.message)
            console.log("调用耗时", e.response.costtime)
            fail(e.response.error.message)
        })
    }
    // int queryRole(int offset,int limit,out vector<Role> role,out int count,out int result);
    queryRole(offset, limit, success, fail) {
        this.proxy.queryRole(offset, limit).then((data) => {
            console.log("baohande", data.response.arguments)
            console.log("调用耗时", data.response.costtime)
            console.log("STRING:", data.response.arguments.result)
            success(data.response.arguments.result, data.response.arguments.role.value, data.response.arguments.count)
        }).catch((e) => {
            console.log("框架错误码：", e.response.error.code)
            console.log("框架错误信息：", e.response.error.message)
            console.log("调用耗时", e.response.costtime)
            fail(e.response.error.message)
        })
    }
    // int queryRoleByCondition(int offset,int limit,string keys,string value,out vector<Role> role,out int count,out int result);
    queryRoleByCondition(offset,limit,key,value,success,fail){
    this.proxy.queryRoleByCondition(offset,limit,key,value).then((data) => {
                console.log("baohande", data.response.arguments)
                console.log("调用耗时", data.response.costtime)
                console.log("STRING:", data.response.arguments.result)
                success(data.response.arguments.result,data.response.arguments.role.value,data.response.arguments.count)
            }).catch((e) => {
                console.log("框架错误码：", e.response.error.code)
                console.log("框架错误信息：", e.response.error.message)
                console.log("调用耗时", e.response.costtime)
                fail(e.response.error.message)
            })
    }
    // int bindRoleAndPermissions(RoleHasPermission newRoleHasPermission,out int result);
    bindRoleAndPermissions(role_id, Permission_id,success, fail) {
        let newAdd = new TarsRPC.RoleHasPermission()
        newAdd.readFromObject({
            role_id:role_id,
            Permission_id:Permission_id,
            create_time : 0,
            uni_id : role_id + "&" + Permission_id,
            }
        )
        this.proxy.bindRoleAndPermissions(newAdd).then((data) => {
            console.log("baohande", data.response.arguments)
            console.log("调用耗时", data.response.costtime)
            console.log("STRING:", data.response.arguments.result)
            success(data.response.arguments.result)
        }).catch((e) => {
            console.log("框架错误码：", e.response.error.code)
            console.log("框架错误信息：", e.response.error.message)
            console.log("调用耗时", e.response.costtime)
            fail(e.response.error.message)
        })
    }
    // int unBindRoleAndPermissions(int RoleID,out int result);
    unBindRoleAndPermissions(releID,success,fail){

     this.proxy.unBindRoleAndPermissions(releID).then((data) => {
                 console.log("baohande", data.response.arguments)
                 console.log("调用耗时", data.response.costtime)
                 console.log("STRING:", data.response.arguments.result)
                 success(data.response.arguments.result)
             }).catch((e) => {
                 console.log("框架错误码：", e.response.error.code)
                 console.log("框架错误信息：", e.response.error.message)
                 console.log("调用耗时", e.response.costtime)
                 fail(e.response.error.message)
             })
     }

    // int queryRolePermissions(int offset,int limit,out vector<RoleHasPermission> Companys,out int count,out int result);
    queryRolePermissions(offset, limit, success, fail) {
        this.proxy.queryRolePermissions(offset, limit).then((data) => {
            console.log("baohande", data.response.arguments)
            console.log("调用耗时", data.response.costtime)
            console.log("STRING:", data.response.arguments.result)
            success(data.response.arguments.result, data.response.arguments.Companys.value, data.response.arguments.count)
        }).catch((e) => {
            console.log("框架错误码：", e.response.error.code)
            console.log("框架错误信息：", e.response.error.message)
            console.log("调用耗时", e.response.costtime)
            fail(e.response.error.message)
        })
    }
    // int queryRolePermissionsByCondition(int offset,int limit,string keys,string value,out vector<RoleHasPermission> binds,out int count,out int result);

    queryRolePermissionsByCondition(offset,limit,key,value,success,fail){
    this.proxy.queryRolePermissionsByCondition(offset,limit,key,value).then((data) => {
                console.log("baohande", data.response.arguments)
                console.log("调用耗时", data.response.costtime)
                console.log("STRING:", data.response.arguments.result)
                success(data.response.arguments.result,data.response.arguments.binds.value,data.response.arguments.count)
            }).catch((e) => {
                console.log("框架错误码：", e.response.error.code)
                console.log("框架错误信息：", e.response.error.message)
                console.log("调用耗时", e.response.costtime)
                fail(e.response.error.message)
            })
    }
    // int createPermissions(CPermission newCPermission,out int c);
    createPermissions(tag,name,summarize, success, fail) {
        let newAdd = new TarsRPC.CPermission()
        newAdd.readFromObject({
            tag:tag,
            name :name,
            summarize:summarize,
            }
        )
        this.proxy.createPermissions(newAdd).then((data) => {
            console.log("baohande", data.response.arguments)
            console.log("调用耗时", data.response.costtime)
            console.log("STRING:", data.response.arguments.c)
            success(data.response.arguments.c)
        }).catch((e) => {
            console.log("框架错误码：", e.response.error.code)
            console.log("框架错误信息：", e.response.error.message)
            console.log("调用耗时", e.response.costtime)
            fail(e.response.error.message)
        })
    }
    // int deletePermissions(int PermissionsID,out int result);
    deletePermissions(PermissionsID,success,fail){

     this.proxy.deletePermissions(PermissionsID).then((data) => {
                 console.log("baohande", data.response.arguments)
                 console.log("调用耗时", data.response.costtime)
                 console.log("STRING:", data.response.arguments.result)
                 success(data.response.arguments.result)
             }).catch((e) => {
                 console.log("框架错误码：", e.response.error.code)
                 console.log("框架错误信息：", e.response.error.message)
                 console.log("调用耗时", e.response.costtime)
                 fail(e.response.error.message)
             })
     }

    // int updatePermissions(CPermission PermissionsID,string keys,string value,out int result);
    updatePermissions(Permission, success, fail) {
        let newupdate = new TarsRPC.CPermission()
        newupdate.readFromObject(
            Permission
        )
        this.proxy.updatePermissions(newupdate, "id", newupdate.id).then((data) => {
            console.log("baohande", data.response.arguments)
            console.log("调用耗时", data.response.costtime)
            console.log("STRING:", data.response.arguments.result)
            success(data.response.arguments.result)
        }).catch((e) => {
            console.log("框架错误码：", e.response.error.code)
            console.log("框架错误信息：", e.response.error.message)
            console.log("调用耗时", e.response.costtime)
            fail(e.response.error.message)
        })
    }

    // int queryPermissions(int offset,int limit,out vector<CPermission> Permissions,out int count,out int result);
    queryPermissions(offset, limit, success, fail) {
        this.proxy.queryPermissions(offset, limit).then((data) => {
            console.log("baohande", data.response.arguments)
            console.log("调用耗时", data.response.costtime)
            console.log("STRING:", data.response.arguments.result)
            success(data.response.arguments.result, data.response.arguments.Permissions.value, data.response.arguments.count)
        }).catch((e) => {
            console.log("框架错误码：", e.response.error.code)
            console.log("框架错误信息：", e.response.error.message)
            console.log("调用耗时", e.response.costtime)
            fail(e.response.error.message)
        })
    }
    // int queryPermissionsByCondition(int offset,int limit,string keys,string value,out vector<CPermission> Permissionsout ,out int count,out int result);
    queryPermissionsByCondition(offset,limit,key,value,success,fail){
    this.proxy.queryPermissionsByCondition(offset,limit,key,value).then((data) => {
                console.log("baohande", data.response.arguments)
                console.log("调用耗时", data.response.costtime)
                console.log("STRING:", data.response.arguments.result)
                success(data.response.arguments.result,data.response.arguments.Permissionsout.value,data.response.arguments.count)
            }).catch((e) => {
                console.log("框架错误码：", e.response.error.code)
                console.log("框架错误信息：", e.response.error.message)
                console.log("调用耗时", e.response.costtime)
                fail(e.response.error.message)
            })
    }
    //
    // int checkCompanyHasPermissionsByID(int CompanyID,int PermissionID,out int result);
    checkCompanyHasPermissionsByID(CompanyID,PermissionID,success,fail){
     this.proxy.checkCompanyHasPermissionsByID(CompanyID,PermissionID).then((data) => {
                 console.log("baohande", data.response.arguments)
                 console.log("调用耗时", data.response.costtime)
                 console.log("STRING:", data.response.arguments.result)
                 success(data.response.arguments.result)
             }).catch((e) => {
                 console.log("框架错误码：", e.response.error.code)
                 console.log("框架错误信息：", e.response.error.message)
                 console.log("调用耗时", e.response.costtime)
                 fail(e.response.error.message)
             })
     }

    // int checkCompanyHasPermissionsByTag(int CompanyID,string PermissionsTag,out int result);
    checkCompanyHasPermissionsByTag(CompanyID,PermissionsTag,success,fail){
        this.proxy.checkCompanyHasPermissionsByTag(CompanyID,PermissionsTag).then((data) => {
            console.log("baohande", data.response.arguments)
            console.log("调用耗时", data.response.costtime)
            console.log("STRING:", data.response.arguments.result)
            success(data.response.arguments.result)
        }).catch((e) => {
            console.log("框架错误码：", e.response.error.code)
            console.log("框架错误信息：", e.response.error.message)
            console.log("调用耗时", e.response.costtime)
            fail(e.response.error.message)
        })
    }
    // int queryCompanyPermissions(int CompanyID,out vector<CPermission> Permissions,out int result);
    queryCompanyPermissions(success, fail) {
        this.proxy.queryCompanyPermissions().then((data) => {
            console.log("baohande", data.response.arguments)
            console.log("调用耗时", data.response.costtime)
            console.log("STRING:", data.response.arguments.result)
            success(data.response.arguments.result, data.response.arguments.Permissions.value)
        }).catch((e) => {
            console.log("框架错误码：", e.response.error.code)
            console.log("框架错误信息：", e.response.error.message)
            console.log("调用耗时", e.response.costtime)
            fail(e.response.error.message)
        })
    }

}

exports = module.exports = CompanyManIns
