import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserService } from '@nx-bugs/user/domain';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './user-list.component.html',
})
export class UserListComponent {
  constructor(public readonly service: UserService) {}
}
