import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserItem } from '../UserItem';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  currentUser:UserItem=JSON.parse(localStorage.getItem(this.route.snapshot.paramMap.get('id')));

  userForm: FormGroup = new FormGroup({
    name: new FormControl(this.currentUser.name,[Validators.required,Validators.minLength(2)]),
    firstname:new FormControl(this.currentUser.firstname,[Validators.required,Validators.minLength(2)]),
    email:new FormControl(this.currentUser.email,[Validators.required,Validators.email]),
    id:new FormControl(this.currentUser.id)
  })
  
  constructor(private route:ActivatedRoute,private router:Router,private servUser:UserService) { }

  ngOnInit() {
    let tmpId=this.route.snapshot.paramMap.get('id');
    this.currentUser=JSON.parse(localStorage.getItem(tmpId));
  }

 editUser(user:UserItem):void{
    this.servUser.editUser(user);
    this.router.navigateByUrl("");
  }
}
