import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';


const routes: Routes = [
  {
    path:'',
    redirectTo: '/user',
    pathMatch:'full'
  },{
    path:'user',
    component: UserComponent
  },{
    path:'user/:id/edit',
    component: EditUserComponent
  },{
    path:'list',
    component: UserListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
