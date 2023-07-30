import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './app-pages/login/login.component';
import { HomeComponent } from './app-pages/home/home.component';
import { ContactComponent } from './app-pages/contact/contact.component';
import { AboutComponent } from './app-pages/about/about.component';
import { CarrersComponent } from './app-pages/carrers/carrers.component';
import { BlogComponent } from './app-pages/blog/blog.component';
import { TechnologyComponent } from './app-pages/technology/technology.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TechnologyComponent,
    BlogComponent,
    AboutComponent,
    CarrersComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
