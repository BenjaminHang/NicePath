import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { UserService } from './user.service';

import { AppComponent } from './app.component';
import { FootmarkModule } from './footmark/footmark.module';
import { CommunityComponent } from './community/community.component';
import { UserModule } from './user/user.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    CommunityComponent, 
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    FootmarkModule,
    UserModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
