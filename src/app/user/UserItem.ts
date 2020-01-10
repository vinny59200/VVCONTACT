export class UserItem{
    name: string;
    firstname: string;
    email: string;
    id?:number;


    constructor(userItemData:UserItem){
        Object.assign(this,{
            ...userItemData
        })
        if(!this.id){
            this.id=new Date().getTime();
        }
    }
}