import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AdminService } from './admin/admin.service';
import { TableModule } from 'primeng/table/';
import { AdminComponent } from './admin/admin.component';
import { MenubarModule } from 'primeng/menubar/';
import { ToastModule } from 'primeng/toast/';
import { MessagesModule } from 'primeng/messages/';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TableModule,
        MenubarModule,
        ToastModule,
        MessagesModule,
      ],
      declarations: [
        AdminComponent,
        AppComponent,
      ],
      providers: [
        AdminService
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Event admin'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Event admin');
  });
});
