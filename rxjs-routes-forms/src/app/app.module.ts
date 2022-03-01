import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, NavLinkDirective } from './app.component';
import { Comp1Component } from './components/comp1/comp1.component';
import { Comp2Component } from './components/comp2/comp2.component';
import { ParentChildComponent } from './components/parent-child/parent-child.component';
import { UserComponent } from './components/parent-child/user/user.component';
import { AddUserComponent } from './components/parent-child/add-user/add-user.component';
import { RemoveUserComponent } from './components/parent-child/remove-user/remove-user.component';
import { HighlightDirective } from './components/parent-child/user/highlight.directive';
import { NestedRoutesComponent } from './components/nested-routes/nested-routes.component';
import { Ruta1Component } from './components/nested-routes/ruta1/ruta1.component';
import { Ruta2Component } from './components/nested-routes/ruta2/ruta2.component';
import { PageNotFoundComponent } from './components/nested-routes/page-not-found/page-not-found.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/guards/auth.guard';
import { DeactivateGuard } from './services/guards/deactivate.guard';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { FilterPipesComponent } from './components/filter-pipes/filter-pipes.component';
import { ShortenPipe } from './components/filter-pipes/pipes/shorten.pipe';
import { FilterPipe } from './components/filter-pipes/pipes/filter.pipe';
import { HttpComponent } from './components/http/http.component';
import { PostComponent } from './components/http/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavLinkDirective,

    // rxjs
    Comp1Component,
    Comp2Component,

    // parent-child
    ParentChildComponent,
    UserComponent,
    AddUserComponent,
    RemoveUserComponent,
    HighlightDirective,

    // nested routes
    NestedRoutesComponent,
    Ruta1Component,
    Ruta2Component,
    PageNotFoundComponent,

    // forms
    TemplateFormComponent,
    ReactiveFormsComponent,

    // filter pipes
    FilterPipesComponent,
    ShortenPipe,
    FilterPipe,

    // http
    HttpComponent,
    PostComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [AuthService, AuthGuard, DeactivateGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
