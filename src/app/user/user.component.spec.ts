import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserItem } from './UserItem';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent, UserListComponent ],
      imports: [
        CommonModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check user items array is empty', () => {
    expect(component.userItems).toEqual([]);
  });

  it('check adding of a user', () => {    
    const userIt: UserItem={
      firstname:'Bob',
      name:'Brown',
      email:'bbrown@unit.us'
    };
    component.addUser(userIt);
    expect(component.userItems.length).toEqual(1);
  });
});
