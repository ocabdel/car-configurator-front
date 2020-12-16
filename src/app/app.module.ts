import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,  HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { PacksListComponent } from './components/packs-list/packs-list.component';
import { LoginComponent } from './components/login/login.component';
import { CarsAddComponent } from './components/cars-add/cars-add.component';
import { PacksAddComponent } from './components/packs-add/packs-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarsDeleteComponent } from './components/cars-delete/cars-delete.component';
import { PacksDeleteComponent } from './components/packs-delete/packs-delete.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersAddComponent } from './components/users-add/users-add.component';
import { ConfigurationsListComponent } from './components/configurations-list/configurations-list.component';
import { ConfigurationsDeleteComponent } from './components/configurations-delete/configurations-delete.component';
import { UsersDeleteComponent } from './components/users-delete/users-delete.component';
import { JwtInterceptor } from './interceptors/jwt-interceptor';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ConfiguratorStartComponent } from './components/configurator-start/configurator-start.component';
import { ConfiguratorMotorComponent } from './components/configurator-motor/configurator-motor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    WelcomeComponent,
    NotFoundComponent,
    CarsListComponent,
    PacksListComponent,
    LoginComponent,
    CarsAddComponent,
    PacksAddComponent,
    CarsDeleteComponent,
    PacksDeleteComponent,
    UsersListComponent,
    UsersAddComponent,
    ConfigurationsListComponent,
    ConfigurationsDeleteComponent,
    UsersDeleteComponent,
    ConfiguratorStartComponent,
    ConfiguratorMotorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
