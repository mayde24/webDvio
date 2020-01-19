import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {WorkComponent} from './components/work/work.component';
import {ContactComponent} from './components/contact/contact.component';
import {AboutComponent} from './components/about/about.component';
import {Client1Component} from './components/client1/client1.component';
import {Client2Component} from './components/client2/client2.component';
import {DevisComponent} from './components/devis/devis.component';
import {EstimationComponent} from './components/estimation/estimation.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'work', component: WorkComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'work/dame-de-coeur', component: Client1Component },
  { path: 'work/esmel-lian', component: Client2Component },
  { path: 'devis', component: DevisComponent },
  { path: 'estimation', component: EstimationComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
