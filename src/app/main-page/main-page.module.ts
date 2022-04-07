import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [MainComponent, ToolbarComponent],
  imports: [CommonModule, SharedModule],
})
export class MainPageModule {}
