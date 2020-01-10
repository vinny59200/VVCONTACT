import { Component, OnInit, Input } from '@angular/core';
import { UserItem } from '../UserItem';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() userItems: UserItem[];

  constructor(private servUser:UserService) { }

  ngOnInit() {
    //this.userItems=this.servUser.getAllUsers();
    console.log("vv before rx obs");
    this.servUser.userItemsRx.subscribe(value=>{this.userItems=value});
    console.log("vv after rx obs");
  }

  ngOnChange(){
    //this.userItems=this.servUser.getAllUsers();
    console.log("vv before rx obs");
    this.servUser.userItemsRx.subscribe(value=>{this.userItems=value});
    console.log("vv after rx obs");
  }
}
