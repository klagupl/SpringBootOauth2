import { DashBoardGuardService } from './auth/dashboard-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '../../node_modules/@angular/router';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes=[
    {path: '', redirectTo:'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent,canActivate:[DashBoardGuardService]},
    {path: 'login', component: LoginComponent}

];



@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}