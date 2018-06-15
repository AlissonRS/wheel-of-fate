import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
    { path: '', component: HomeComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        SharedModule
    ],
    declarations: [HomeComponent],
    exports: [
        RouterModule,
        CommonModule
    ]
})
export class HomeModule { }