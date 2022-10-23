import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskBarComponent } from './add-task-bar.component';

describe('AddTaskBarComponent', () => {
  let component: AddTaskBarComponent;
  let fixture: ComponentFixture<AddTaskBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTaskBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTaskBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
