import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  setClasses() {
    const classes = {
      todo: true,
      iscomplete: this.todo.completed
    };
    return classes;
  }

  onToggle() {
    this.todo.completed = !this.todo.completed;
    this.todoService.toggleCompleted(this.todo).subscribe(todo => console.log(todo));
    }

  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }

}
