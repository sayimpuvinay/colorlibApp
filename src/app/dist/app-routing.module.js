"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./app-pages/home/home.component");
var login_component_1 = require("./app-pages/login/login.component");
var contact_component_1 = require("./app-pages/contact/contact.component");
var about_component_1 = require("./app-pages/about/about.component");
var carrers_component_1 = require("./app-pages/carrers/carrers.component");
var blog_component_1 = require("./app-pages/blog/blog.component");
var technology_component_1 = require("./app-pages/technology/technology.component");
var routes = [
    { path: '', component: login_component_1.LoginComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'technologies', component: technology_component_1.TechnologyComponent },
    { path: 'blog', component: blog_component_1.BlogComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'carrers', component: carrers_component_1.CarrersComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: '**', redirectTo: '' } // Redirect to Home page for any other routes
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
