import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarefaRoutes } from './tarefas';

//lista de rotas
export const routes: Routes = [
    {
        path: '',
        redirectTo: '/tarefas/listar',
        pathMatch: 'full'
    },
    ...TarefaRoutes //concatena com as rotas principais
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}