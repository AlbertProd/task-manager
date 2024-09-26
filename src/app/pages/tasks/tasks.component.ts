import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: any[] = [];
  newTask: string = '';

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks.slice(0, 10); // Для примера, ограничим до 10 задач
    });
  }

  addTask() {
    if (this.newTask.trim()) {
      const task = { title: this.newTask, completed: false };
      this.taskService.addTask(task).subscribe((newTask) => {
        this.tasks.unshift(newTask);
        this.newTask = '';
      });
    }
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter(task => task.id !== id);
    });
  }
}