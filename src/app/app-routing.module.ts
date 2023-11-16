import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmpFirstComponent } from './components/cmp-first/cmp-first.component';
import { CmpSecndComponent } from './components/cmp-secnd/cmp-secnd.component';

const routes: Routes = [
  {path: '', redirectTo: 'first', pathMatch: 'full'},
  {path:'first', component: CmpFirstComponent},
  {path:'second', component: CmpSecndComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
