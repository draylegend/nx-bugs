import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  all() {
    return ['user 1', 'User 2'];
  }
}
