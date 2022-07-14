export interface ListInt{
    roleName:string,
    roleId:number,
    authority:number[]
}


interface SelectDateInt{
    roleName:string,
    roleId:number,
}


export class InitData{
    selectData:SelectDateInt = {
        roleName:'',
        roleId:0,
    }
    list:ListInt[]=[]
    listData:[ListInt][]=[]
    isAdd = false
}