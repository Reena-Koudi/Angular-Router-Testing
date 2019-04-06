import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from 'src/app/components/start/start.component';
import { TakeAPicComponent } from 'src/app/components/take-a-pic/take-a-pic.component';
import { TryOnComponent } from 'src/app/components/try-on/try-on.component';

export const routes: Routes = [
  {path: '' , component: StartComponent },
  {path: 'tryon' , component: TryOnComponent },
  {path: 'takeapic' , component: TakeAPicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [StartComponent, TryOnComponent, TakeAPicComponent];
