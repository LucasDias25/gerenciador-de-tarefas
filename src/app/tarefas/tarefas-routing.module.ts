import { Routes } from '@angular/router';

import { CadastrarTarefaComponent } from './cadastrar';
import { ListarTarefaComponent } from './listar';
import { EditarTarefaComponent } from './editar';

export const TarefaRoutes: Routes = [
    {
        path: 'tarefas',
        redirectTo: 'taretas/listar'
    },
    {
        path: 'tarefas/listar',
        component: ListarTarefaComponent
    },
    {
        path: 'tarefas/cadastrar',
        component: CadastrarTarefaComponent
    },
    {
        path: 'tarefas/editar/:id', //chamando parametro pelo operador /:
        component: EditarTarefaComponent
    }
];