import { catchError } from 'rxjs';
import { Todo } from '../../model/todo.type';
import { TodosService } from './../../services/todos.service';
import { Component, inject, OnInit, signal } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  imports: [NgIf],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);

  ngOnInit(): void {
    this.todoService
    .getTodos()
    .then((observable) => {
      observable.pipe(
        catchError((error) => {
          console.error('Error:', error);
          throw error;
        })
      )
      .subscribe((todos: Todo[]) => {
        this.todoItems.set(todos);
      });
    });
  }
}