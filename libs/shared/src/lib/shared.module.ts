import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CheckboxModule } from './checkbox';

@NgModule({
  exports: [CommonModule, CheckboxModule],
})
export class SharedModule {}
