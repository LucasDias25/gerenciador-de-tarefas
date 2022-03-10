import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { __decorate } from 'tslib';

@Directive({
  selector: '[tarefaConcluida]'
})

export class TarefaConcluidaDirective implements OnInit {

  @Input() tarefaConcluida: boolean;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    if (this.tarefaConcluida) {
      this.el.nativeElement.style.textDecoration = 'line-through'; //NÂO DEU
    }
  }
}
