import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsComponent } from './charts.component';
import { RouterModule } from '@angular/router';
import { ChartsRoutes } from './charts.routes';

@NgModule({
  declarations: [ChartsComponent],
  exports: [ChartsComponent],
  imports: [
    RouterModule.forChild(ChartsRoutes),
    CommonModule,
    NgxChartsModule
  ]
})
export class ChartsModule { }
