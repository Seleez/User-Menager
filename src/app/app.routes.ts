import { Routes } from '@angular/router';
import { UserModule } from './user/user.module';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserProfileModule } from './user/user-profile/user-profile.module';

export const routes: Routes = [
    {path: 'user', component: UserModule },
    {path: 'user/user-edit', component: UserEditComponent},
    {path: 'user/user-list', component: UserListComponent},
    {path: 'user/user-profile', component: UserProfileModule},
];
