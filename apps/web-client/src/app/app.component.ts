import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'nb-root',
  template: `
    <a routerLink="users">Users</a>
    <main><router-outlet></router-outlet></main>
  `,
})
export class AppComponent {}
