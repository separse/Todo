import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html'
})

export class AddTodoComponent {

  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  title: string;

  onSubmit() {
    const todo = {
      title: this.title,
      completed: false
    };
    this.addTodo.emit(todo);
  }

}
