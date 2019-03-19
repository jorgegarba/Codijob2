import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'

import {HomeComponent} from './components/home/home.component';
import {SkillIndexComponent} from './components/skill/skill-index/skill-index.component';
import { UsuarioIndexComponent } from './components/usuario/usuario-index/usuario-index.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'home',component: HomeComponent},
  {path: 'skill/index',component: SkillIndexComponent},
  {path: 'usuario/index',component: UsuarioIndexComponent},
  {path: '**',component: HomeComponent},
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }