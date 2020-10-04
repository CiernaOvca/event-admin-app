import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import { AdminService } from './admin.service';
import { AppComponent } from '../app.component';

//prime ng components
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputNumberModule } from 'primeng/inputnumber';
import { OrderListModule } from 'primeng/orderlist';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { MessagesModule } from 'primeng/messages';
import { DropdownModule } from 'primeng/dropdown';
import { MessageModule } from 'primeng/message';
import { MenubarModule } from 'primeng/menubar';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  let adminService: AdminService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        AdminComponent,
        AppComponent, 
      ],
      providers: [ AdminService, AdminComponent ],
      imports: [
        FormsModule,

        SelectButtonModule,
        InputSwitchModule,
        InputNumberModule,
        OrderListModule,
        InputTextModule,
        CalendarModule,
        MessagesModule,
        DropdownModule,
        MenubarModule,
        TooltipModule,
        MessageModule,
        ButtonModule,
        DialogModule,
        TableModule,
        ToastModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    adminService = new AdminService();
  });

  it('should create admin component', () => {
    expect(component).toBeTruthy();
  });

  it('object returned from getEventDetail should have every property filled out', () => {
    let data = adminService.getEventDetail(1);
    expect(Object.values(data).every(o => o !== null)).toBe(true);
  });

  it('should have the correct amount past events after init', () => {
    expect(component.pastEvents).toBe(adminService.getNumberOfPastEvents());
  });

  it('should call custom sort in getEventList method', () => {
    spyOn(component, 'customSort').and.callThrough();
    component.getEventList({sortField: 'name'});
    expect(component.customSort).toHaveBeenCalled();
  });
});
