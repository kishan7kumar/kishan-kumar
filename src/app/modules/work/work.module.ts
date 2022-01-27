import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from 'src/app/components/pages/work/work.component';
import { WorkRoutingModule } from './work-routing.module';



@NgModule({
  declarations: [WorkComponent],
  imports: [
    CommonModule,
    WorkRoutingModule
  ]
})

export class WorkModule { }
