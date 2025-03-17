import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.module';

@Component({
  selector: 'app-user-list',
  imports: [NgFor],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
 users: User[]= [];
 constructor(private userService: UserService){}

 ngOnInit(){
  this.users = this.userService.getUsers()
 }

}
