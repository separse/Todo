import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor(private todosService: TodoService) { }

  ngOnInit() {
    this.todosService.getTodos().subscribe(todo => this.todos = todo);
  }
  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t.id !== todo.id);
    this.todosService.deleteTodo(todo).subscribe();
}

  addTodo(todo: Todo) {
    this.todosService.addTodo(todo).subscribe(tod => this.todos.push(tod));
  }
}
