import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BigDogsComponent } from './big-dogs/big-dogs.component';
import { SmallDogsComponent } from './small-dogs/small-dogs.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'big-dogs' },
  { path: 'big-dogs', component: BigDogsComponent },
  { path: 'small-dogs', component: SmallDogsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
