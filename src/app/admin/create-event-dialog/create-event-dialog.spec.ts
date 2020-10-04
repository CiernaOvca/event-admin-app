import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEventDialogComponent } from "./create-event-dialog.component";
import { CreateEventDialogService } from './create-event-dialog.service';
import { AdminService } from '../admin.service';

import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { SelectButtonModule } from 'primeng/selectbutton/';
import { InputNumberModule } from 'primeng/inputnumber/';
import { DropdownModule } from 'primeng/dropdown/';
import { CalendarModule } from 'primeng/calendar/';
import { AppComponent } from 'src/app/app.component';
import { AdminComponent } from '../admin.component';

describe('CreateEventDialogComponent', () => {
  let component: CreateEventDialogComponent;
  let fixture: ComponentFixture<CreateEventDialogComponent>;
  let service: CreateEventDialogService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        AppComponent, 
        AdminComponent, 
        CreateEventDialogComponent 
      ],
      providers: [ CreateEventDialogService, AdminService, DynamicDialogRef, DynamicDialogConfig ],
      imports: [
        ReactiveFormsModule,
        FormsModule,

        SelectButtonModule,
        InputNumberModule,
        DropdownModule,
        CalendarModule,
      ]
    })
    .compileComponents();
  });
  
  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEventDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = new CreateEventDialogService();
  });

  it('should create Create Event Dialog component', () => {
    expect(component).toBeTruthy();
  });

  it('should have capacity of 10', () => {
    component.createEventFormGroup.controls.eventPlace.setValue('S2');
    component.changedPlace();
    expect(component.maxPpl).toBe(10);
  });

})