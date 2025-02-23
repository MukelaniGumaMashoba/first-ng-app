import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-todos',
 imports: [NgIf],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
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
