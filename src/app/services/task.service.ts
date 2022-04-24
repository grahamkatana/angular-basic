import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable, of} from 'rxjs'
import { Task } from 'src/app/Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiURL = 'http://127.0.0.1:3000/tasks'

  constructor(private http:HttpClient) { }

  getTasks():Observable <Task[]> {
   return this.http.get<Task[]>(this.apiURL)
  }

  deleteTask(task:Task):Observable<Task>{
    const url = `${this.apiURL}/${task.id}`
    return this.http.delete<Task>(url)
  }

  toggleTaskReminder(task:Task):Observable<Task>{
    const url = `${this.apiURL}/${task.id}`
    return this.http.put<Task>(url,task, httpOptions)
  }
  addTaskItem(task:Task):Observable<Task>{
    const url = `${this.apiURL}`
    return this.http.post<Task>(url,task, httpOptions)

  }


}
