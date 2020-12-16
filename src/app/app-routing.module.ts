import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { PacksListComponent } from './components/packs-list/packs-list.component';
import { LoginComponent } from './components/login/login.component';
import { CarsAddComponent } from './components/cars-add/cars-add.component';
import { CarsAddGuard } from './guards/cars-add.guard';
import { PacksAddComponent } from './components/packs-add/packs-add.component';
import { PacksAddGuard } from './guards/packs-add.guard';
import { CarsDeleteComponent } from './components/cars-delete/cars-delete.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { PacksDeleteComponent } from './components/packs-delete/packs-delete.component';
import { UsersAddComponent } from './components/users-add/users-add.component';
import { ConfigurationsListComponent } from './components/configurations-list/configurations-list.component';
import { UsersListGuard } from './guards/users-list.guard';
import { ConfigurationsListGuard } from './guards/configurations-list.guard';
import { ConfigurationsDeleteComponent } from './components/configurations-delete/configurations-delete.component';
import { UsersDeleteComponent } from './components/users-delete/users-delete.component';
import { LogoutResolver } from './resolvers/logout-resolver';
import { ConfiguratorStartComponent } from './components/configurator-start/configurator-start.component';
import { ConfiguratorMotorComponent } from './components/configurator-motor/configurator-motor.component';

const routes: Routes = [
  { path:'', component:WelcomeComponent },
  { path: 'login', component: LoginComponent} ,
  { path: 'logout', component: WelcomeComponent, resolve: [LogoutResolver] },
  { path:'configuratorStart', component:ConfiguratorStartComponent },
  { path: 'configuratorMotor', component:ConfiguratorMotorComponent},
  { path:'cars', component:CarsListComponent }, //Ok
  //{ path: 'addCar', component: CarsAddComponent},
  { path: 'addCar', component: CarsAddComponent, canActivate: [CarsAddGuard] },
  //{ path: 'detailCar', component: CarsAddComponent, canActivate: [CarsAddGuard] },
  { path: 'deleteCar/:id', component: CarsDeleteComponent, canActivate: [CarsAddGuard] },
  { path: 'packs',  component:PacksListComponent },
  { path: 'addPack', component: PacksAddComponent, canActivate: [PacksAddGuard] },
  { path: 'deletePack/:id', component: PacksDeleteComponent, canActivate: [PacksAddGuard] },
  { path: 'user', component:UsersListComponent, canActivate: [UsersListGuard]},
  //{ path: 'addUser', component: UsersAddComponent},
  { path: 'register', component: UsersAddComponent},
  { path: 'deleteUser/:id', component: UsersDeleteComponent, canActivate: [UsersListGuard] },
  { path: 'configurations',  component:ConfigurationsListComponent, canActivate: [ConfigurationsListGuard] },
  { path: 'deleteConfiguration/:id', component:ConfigurationsDeleteComponent, canActivate: [ConfigurationsListGuard]},
  { path: '**', component:NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
