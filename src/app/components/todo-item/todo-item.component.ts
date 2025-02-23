import { catchError } from 'rxjs';
import { Todo } from '../../model/todo.type';
import { TodosService } from './../../services/todos.service';
import { Component, inject, input, OnInit, output, signal } from '@angular/core';
import { NgIf } from '@angular/common';
import { HighlightCompletedTodoDirective } from '../../directives/highlight-completed-todo.directive';

@Component({
  selector: 'app-todo-item',
  imports: [HighlightCompletedTodoDirective],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent{
todo = input.required<Todo>();
todoToggled = output<Todo>();

todoClicked(){
  this.todoToggled.emit(this.todo());
}

}