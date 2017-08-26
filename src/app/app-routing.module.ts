import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommunityComponent } from './community/community.component';
import { UserComponent } from './user/user.component';
import { FootmarkComponent } from './footmark/footmark.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
    imports: [
      RouterModule.forRoot([
        {path:'rootmark',component:FootmarkComponent},
        {path:'community',component:CommunityComponent},
        {path:'profile/:id',component:UserComponent},
        {path:'login',component:LoginComponent},
        {path: 'register',component:RegisterComponent},
        {path:"",redirectTo:'rootmark',pathMatch:'full'},
      ])
    ],
    exports: [RouterModule],

  })
export class AppRoutingModule { }