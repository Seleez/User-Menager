import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}

export interface User {
  id: number;
  Name: string;
  Surname: string;
}
