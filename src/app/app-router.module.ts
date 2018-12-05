import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {CareerComponent} from './career/career.component';
import {TrainingComponent} from './training/training.component';
import {ContactInfoComponent} from './contact-info/contact-info.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent,  data: {animation: 'AnimatedPage'} },
  {path: 'profile', component: ProfileComponent,  data: {animation: 'AnimatedPage'} },
  {path: 'career', component: CareerComponent,  data: {animation: 'AnimatedPage'} },
  {path: 'training', component: TrainingComponent,  data: {animation: 'AnimatedPage'} },
  {path: 'contact-info', component: ContactInfoComponent, data: {animation: 'AnimatedPage'} },
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRouterModule { }
