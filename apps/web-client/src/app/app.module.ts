import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'users',
        loadChildren: () =>
          import('@nx-bugs/user-feature').then((m) => m.UserFeatureModule),
      },
      { path: '**', redirectTo: 'users' },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
