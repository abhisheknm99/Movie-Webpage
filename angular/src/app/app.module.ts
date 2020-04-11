import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from'@angular/router';
import {FormsModule}from '@angular/forms';
import { JwtModule } from "@auth0/angular-jwt";
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutComponent } from './components/about/about.component';
import { ContentComponent } from './components/content/content.component';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { Anipage1Component } from './components/anipage1/anipage1.component';
import { Anipage2Component } from './components/anipage2/anipage2.component';

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';

export function tokenGetter() {
  return localStorage.getItem("id_token");
}

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'content', component:ContentComponent},
  {path:'about', component:AboutComponent},
  {path:'page1', component:Page1Component},
  {path:'page2', component:Page2Component},
  {path:'anipage1', component:Anipage1Component},
  {path:'anipage2', component:Anipage2Component}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    ContentComponent,
    Page1Component,
    Page2Component,
    Anipage1Component,
    Anipage2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    JwtModule.forRoot({
      config:{
        tokenGetter: tokenGetter
      }
    }),
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ValidateService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
