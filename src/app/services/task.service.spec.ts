import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  // Получение всех задач
  getTasks(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Добавление новой задачи
  addTask(task: any): Observable<any> {
    return this.http.post(this.apiUrl, task);
  }

  // Удаление задачи
  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}