import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { UserService } from '../user.service';


@NgModule({
  declarations: [
    
    UserComponent,
  ],
  imports: [
    BrowserModule
  ],
  exports: [
      UserComponent
  ],
  providers: [UserService],
})
export class UserModule { }
