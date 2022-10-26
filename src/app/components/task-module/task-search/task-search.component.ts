import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task-search',
  templateUrl: './task-search.component.html',
  styleUrls: ['./task-search.component.scss']
})
export class TaskSearchComponent implements OnInit {
  search='';
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
  }

  searchTask(keyword:string){
    if(keyword.length > 3 || keyword.length === 0){
      this.taskService.searchTask(keyword)
    }
  }
}
