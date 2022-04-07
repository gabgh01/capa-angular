import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

const MATERIAL = [MatToolbarModule, MatButtonModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, MATERIAL],
  exports: [MATERIAL],
})
export class MaterialModule {}
