import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreatePetComponent } from './components/pet/create-pet.component';
import { ListComponent } from './components/pet/list.component';
import { ListUsersComponent } from './components/users/list-users.component';

const routes: Routes = [
  { 
  path: 'Home',
    component: HomeComponent,
    children:[
      {
        path: 'pet',
        component: ListComponent,
      },
      {
        path: 'create-pet',
        component: CreatePetComponent,
      },
      {
        path: 'users',
        component: ListUsersComponent,
      },
    ]

  },
  {
    path:'**',
    pathMatch: 'full',
    redirectTo:'Home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
