import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SurveyComponent } from './survey/survey.component';
import { ResultComponent } from './result/result.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent},
  { path: 'toDashboard', pathMatch: 'full', component: DashboardComponent},
  { path: 'toSurvey', pathMatch: 'full', component: SurveyComponent},
  { path: 'toResult', pathMatch: 'full', component: ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
