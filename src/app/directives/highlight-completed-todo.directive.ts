import { Directive, effect, ElementRef, inject, input, signal } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]'
})
export class HighlightCompletedTodoDirective {
  isCompleted = input(false);
  ell = inject(ElementRef);
  stylesEffect = effect(() =>{
    if (this.isCompleted()){
      this.ell.nativeElement.style.textDecoration = 'line-through';
    } else {
      this.ell.nativeElement.style.textDecoration = 'none';
    } 
  });


  constructor() { }
    
  }

