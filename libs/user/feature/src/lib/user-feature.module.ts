import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@nx-bugs/shared';
import { UserDomainModule } from '@nx-bugs/user/domain';
import { UserListComponent } from './user-list.component';

@NgModule({
  declarations: [UserListComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: UserListComponent },
      { path: '**', redirectTo: '' },
    ]),
    SharedModule,
    UserDomainModule,
  ],
})
export class UserFeatureModule {}
