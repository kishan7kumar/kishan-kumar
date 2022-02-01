import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full',
  // },
  
  // {
  //   path: 'home',
  //   loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
  // },

  // {
  //   path: 'education',
  //   loadChildren: () => import('./modules/education/education.module').then((m) => m.EducationModule),
  // },
  // {
  //   path: 'work',
  //   loadChildren: () => import('./modules/work/work.module').then((m) => m.WorkModule),
  // },
  // {
  //   path: 'skills',
  //   loadChildren: () => import('./modules/skills/skills.module').then((m) => m.SkillsModule),
  // },
  // {
  //   path: 'contact',
  //   loadChildren: () => import('./modules/contact/contact.module').then((m) => m.ContactModule),
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
