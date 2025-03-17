import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink, UserEditComponent, UserListComponent, UserProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'User-Menager';
}
