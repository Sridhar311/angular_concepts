import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { Controlflow } from './components/controlflow/controlflow';
import { Databinding } from './components/databinding/databinding';
import { Signalexample } from './components/signalexample/signalexample';

import { Attributedirective } from './components/attributedirective/attributedirective';
import { Getapi } from './components/getapi/getapi';
import { Crud } from './components/crud/crud';
import { ReactiveUser } from './components/reactive-user/reactive-user';
import { Pipee } from './components/pipee/pipee';
import { Service } from './components/service/service';
import { Login } from './components/login/login';
import { Layout } from './components/layout/layout';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:Login
    },
    {
        path:'',
        component:Layout,
        children:[
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
    },
    {
        path:'form',
        component:ReactiveUser
    },
    {
        path:'pipe',
        component:Pipee
    },
    {
        path:'service',
        component:Service
    }
        ]
    }
];
