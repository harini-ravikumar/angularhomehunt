import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeviewComponent } from './homeview/homeview.component';

const routes: Routes = [
  {component:HomeComponent, path: '', pathMatch: 'full'},
  {component:HomeviewComponent, path: 'homeview/:id'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
