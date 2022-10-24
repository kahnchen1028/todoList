import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-add-task-bar',
  templateUrl: './add-task-bar.component.html',
  styleUrls: ['./add-task-bar.component.scss']
})
export class AddTaskBarComponent implements OnInit {
  taskForm: FormGroup;
  constructor(private fb:FormBuilder,private taskService:TaskService) {
    this.taskForm = this.fb.group({
      description:new FormControl(''),
      deadLineTime:new FormControl(new Date()),
      createTime:new FormControl(new Date().getTime()),
      complated:false
    })
   }

  ngOnInit(): void {
   
  }

  addNewTask(){
    console.log(this.taskForm.value)
    this.taskService.addTaskList(this.taskForm.value)
  }
}
