import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { AppRoutingModule } from '../app-routing.module';
import { EditUserComponent } from './edit-user/edit-user.component';



@NgModule({
  declarations: [UserComponent, UserListComponent, EditUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports:[UserComponent]
})
export class UserModule { 


 
}
