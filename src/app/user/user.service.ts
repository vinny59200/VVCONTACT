import { Injectable } from '@angular/core';
import { UserItem } from './UserItem';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userItems:number[]=[];
  userItemsRx:Subject<UserItem[]>=new Subject();
  constructor() { this.updateUserItemsRx();}

  addUser(user:UserItem):void{  
    if(!user.id){
      user.id=new Date().getTime();
    }
    localStorage.setItem(""+user.id,JSON.stringify(user));
    if(JSON.parse(localStorage.getItem("userTabId")))
    this.userItems=JSON.parse(localStorage.getItem("userTabId"));
    this.userItems.push(user.id);
    localStorage.setItem("userTabId",JSON.stringify(this.userItems));
    console.log(user);
    console.log(JSON.parse(localStorage.getItem("userTabId")));
    this.updateUserItemsRx();
  }

  updateUserItemsRx():void{
    this.userItemsRx.next(this.getAllUsers());
  }

  getUser(userId:number):UserItem{
    return null;
  }

  getAllUsers():UserItem[]{
    let tmpUsers: number[]=JSON.parse(localStorage.getItem("userTabId"));
    let resultUsers:UserItem[]=[];
    if(tmpUsers != null && tmpUsers != undefined&&tmpUsers.length>0){
      tmpUsers.forEach(function(val){
        let tmpUser=JSON.parse(localStorage.getItem(""+val));
        resultUsers.push(tmpUser);
      });
   }
    return resultUsers;
  }

  editUser(user:UserItem):void{
    console.log("in edit leaf");
    console.log(user);
    localStorage.setItem(""+user.id,JSON.stringify(user));
    this.updateUserItemsRx();
  }

  removeUser(userId:number):void{

  }

}
