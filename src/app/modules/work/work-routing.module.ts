import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkComponent } from 'src/app/components/pages/work/work.component';


const routes: Routes = [

  {
    path: '',
    component: WorkComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WorkRoutingModule { }
