import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListVoyageComponent } from './list-voyage/list-voyage.component';
import { CreateVoyageComponent } from './create-voyage/create-voyage.component';
import { VoyageDetailsComponent } from './voyage-details/voyage-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'voyages', component: ListVoyageComponent },
    { path: 'ajouter', component: CreateVoyageComponent },
    { path: 'voyages/:id', component: VoyageDetailsComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent}
];
