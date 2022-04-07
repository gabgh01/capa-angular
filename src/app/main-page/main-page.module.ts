import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, SharedModule],
})
export class MainPageModule {}
