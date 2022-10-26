import { Component, OnInit,AfterViewInit ,ViewChild, OnDestroy} from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort, Sort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TaskModel } from 'src/app/model/task.model';
import { TaskService } from 'src/app/service/task.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit , OnDestroy ,AfterViewInit {
  private destory$ = new Subject()
  displayedColumns: string[] = ['complated', 'description', 'deadLineTime', 'createdTime','id'];
  dataSource = new MatTableDataSource<TaskModel>([]);
  EditId:number=-1;
  currentTask={description:'',complated:false}
  @ViewChild(MatSort)sort!: MatSort;

  constructor(public taskService:TaskService,private _liveAnnouncer: LiveAnnouncer) { }

  ngOnInit(): void {
    this.taskService.getTaskList().pipe(takeUntil(this.destory$)).subscribe(data=>{
      console.log(data)
      this.dataSource.data = data;
    })
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  setCurrentComplated(obj:any){
    this.currentTask.complated=obj.checked
    console.log(this.currentTask)
  }

  setCurrentDescription(obj:any){

    this.currentTask.description=obj.target.value
    console.log(this.currentTask,obj)
  }

  toggleEditMode(task:TaskModel){
    if(this.EditId === -1){
      this.EditId = task.id;
      this.currentTask.complated=task.complated;
      this.currentTask.description=task.description;
    }
    else{
      this.EditId = -1;
      this.updateTask({...task, ...this.currentTask});
    }
    
  }

  updateTask(newTask:TaskModel){
    console.log(this.currentTask)
   this.taskService.updateTask(newTask);
  }

  deleteTask(id:number){
    this.taskService.deleteTask(id);
  }


  taskSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  ngOnDestroy(): void {
    this.destory$.next(null);
    this.destory$.unsubscribe();
  }
}

