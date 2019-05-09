import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { DeputadosComponent } from './deputados/deputados.component';



const routes: Routes = [
    {path: 'deputados', component: DeputadosComponent},
    {path: '', redirectTo: '/deputados', pathMatch: 'full'},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }