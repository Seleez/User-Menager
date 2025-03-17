import { Injectable } from '@angular/core';
import { User } from './user.module';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  private users: User[] = [
    { id: 1, Name: 'Marek', Surname: 'Pieczarek' },
    { id: 1, Name: 'Arek', Surname: 'Koparek' },
  ];
  getUsers(): User[] {
    return this.users;
  }

  getUsersById(id: Number): User | undefined {
    return this.users.find((user) => user.id === id);
  }
}
