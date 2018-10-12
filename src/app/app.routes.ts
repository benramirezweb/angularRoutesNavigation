import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Pg1Component } from './pages/pg1.component';
import { Pg2Component } from './pages/pg2.component';
import { Pg3Component } from './pages/pg3.component';
import { Pg4Component } from './pages/pg4.component';

const ROUTES: Routes = [
    { path: '', component: Pg1Component },
    { path: 'pg1', component: Pg1Component },
    { path: 'pg2', component: Pg2Component },
    { path: 'pg3', component: Pg3Component },
    { path: 'pg4', component: Pg4Component },
    { path: '**', component: Pg1Component }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}
