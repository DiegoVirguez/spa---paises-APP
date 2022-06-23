import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [

    {
        path: '', //simula el url inicial
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    {
        path:'region', //cuando alguien entre al path region
        component: PorRegionComponent,
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        path: 'pais/:id',           // codigo pais que es una variable
        component: VerPaisComponent 
    },
    {
        path:'**',  //cualquier otro path
        redirectTo: ''
    }

];

@NgModule({
    imports: [
        RouterModule.forRoot( routes ) //agregar las rutas aca
    ],
    exports: [
        RouterModule // es neceario exportarlo
    ]
})
export class AppRountingModule{}