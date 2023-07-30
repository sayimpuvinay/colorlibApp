"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CarrersComponent = void 0;
var core_1 = require("@angular/core");
var CarrersComponent = /** @class */ (function () {
    function CarrersComponent() {
        this.roles = [
            {
                title: 'Software Engineer',
                description: 'We are looking for a skilled software engineer with experience in frontend and backend development.'
            },
            {
                title: 'UX/UI Designer',
                description: 'We are seeking a creative UX/UI designer who can translate user requirements into stunning designs.'
            },
            {
                title: 'Data Analyst',
                description: 'Join our data analytics team to analyze and interpret complex data sets to drive business insights.'
            },
            {
                title: 'Mobile App Developer',
                description: 'We need an experienced mobile app developer proficient in iOS and Android development.'
            },
            {
                title: 'DevOps Engineer',
                description: 'Be a part of our DevOps team and help automate the deployment and monitoring of applications.'
            },
            {
                title: 'Quality Assurance (QA) Tester',
                description: 'Join our QA team to ensure the quality and reliability of our software products.'
            },
            {
                title: 'Project Manager',
                description: 'We are looking for a talented project manager to lead and oversee various software projects.'
            },
            {
                title: 'Business Analyst',
                description: 'Join our team of business analysts to gather and analyze requirements for software development.'
            },
            {
                title: 'Full Stack Developer',
                description: 'We need a full stack developer who can handle both frontend and backend aspects of applications.'
            },
            {
                title: 'Technical Support Specialist',
                description: 'Provide technical support and troubleshoot issues for our clients and users.'
            }
        ];
    }
    CarrersComponent = __decorate([
        core_1.Component({
            selector: 'app-careers',
            templateUrl: './carrers.component.html',
            styleUrls: ['./carrers.component.css']
        })
    ], CarrersComponent);
    return CarrersComponent;
}());
exports.CarrersComponent = CarrersComponent;
