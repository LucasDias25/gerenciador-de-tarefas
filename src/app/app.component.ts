import { Component } from '@angular/core';

import { TarefaService, Tarefa} from './tarefas/shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'GERENCIADOR DE TAREFAS';
  tarefas: Tarefa [];

  constructor(private tarefaService: TarefaService) {}

}
