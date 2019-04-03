import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TakeAPicComponent } from 'src/app/components/take-a-pic/take-a-pic.component';
import { TryOnComponent } from 'src/app/components/try-on/try-on.component';

const routes: Routes = [
  {path: 'tryon' , component: TryOnComponent },
  {path: 'takeapic' , component: TakeAPicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [TryOnComponent, TakeAPicComponent];
