import { Routes } from '@angular/router';
import { UserModule } from './user/user.module';

export const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
];
