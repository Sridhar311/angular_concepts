import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { Controlflow } from './components/controlflow/controlflow';
import { Databinding } from './components/databinding/databinding';
import { Signalexample } from './components/signalexample/signalexample';

import { Attributedirective } from './components/attributedirective/attributedirective';
import { Getapi } from './components/getapi/getapi';
import { Crud } from './components/crud/crud';

export const routes: Routes = [
    {path:'admin',component:Admin},
    {
        path:'controlflow',
        component:Controlflow
    },
    {
        path:'databinding',
        component:Databinding
    },
    {
        path:'signal',
        component:Signalexample
    },
    {
        path:'directive',
        component:Attributedirective
    },
    {
        path:'getapi',
        component:Getapi
    },
    {
        path:'crud',
        component:Crud
    }
    
];
