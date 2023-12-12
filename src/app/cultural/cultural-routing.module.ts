import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CulturalComponent } from './cultural.component';

const routes: Routes = [{
  path:'',
  children: [
    {path:'**',component:CulturalComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CulturalRoutingModule { }
