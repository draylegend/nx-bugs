import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'nb-checkbox',
  templateUrl: `./checkbox.component.html`,
})
export class CheckboxComponent {}
