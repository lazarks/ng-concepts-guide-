import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './components/comp1/comp1.component';
import { Comp2Component } from './components/comp2/comp2.component';
import { ParentChildComponent } from './components/parent-child/parent-child.component';
import { UserComponent } from './components/parent-child/user/user.component';
import { AddUserComponent } from './components/parent-child/add-user/add-user.component';
import { RemoveUserComponent } from './components/parent-child/remove-user/remove-user.component';

@NgModule({
  declarations: [AppComponent, Comp1Component, Comp2Component, ParentChildComponent, UserComponent, AddUserComponent, RemoveUserComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
