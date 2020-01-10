import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms'
import { UserItem } from './UserItem';
import { UserService } from './user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:UserItem[];

  userForm: FormGroup = new FormGroup({
    name: new FormControl("",[Validators.required,Validators.minLength(2)]),
    firstname:new FormControl("",[Validators.required,Validators.minLength(2)]),
    email:new FormControl("",[Validators.required,Validators.email]),
    id:new FormControl(null)
  })

  constructor(private servUser:UserService) { }


  ngOnInit() {
  }

  addUser(user:UserItem):void{
    this.servUser.addUser(user);
    this.users=this.servUser.getAllUsers();
  }
}
