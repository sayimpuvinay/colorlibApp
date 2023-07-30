import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './app-pages/home/home.component';
import { LoginComponent } from './app-pages/login/login.component';
import { ContactComponent } from './app-pages/contact/contact.component';
import { AboutComponent } from './app-pages/about/about.component';
import { CarrersComponent } from './app-pages/carrers/carrers.component';
import { BlogComponent } from './app-pages/blog/blog.component';
import { TechnologyComponent } from './app-pages/technology/technology.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'technologies', component: TechnologyComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'about', component: AboutComponent },
  { path: 'carrers', component: CarrersComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' } // Redirect to Home page for any other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }