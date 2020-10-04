import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// app components and services
import { CreateEventDialogComponent } from './admin/create-event-dialog/create-event-dialog.component';
import { CreateEventDialogService } from './admin/create-event-dialog/create-event-dialog.service';
import { AdminComponent } from './admin/admin.component';
import { AdminService } from './admin/admin.service';

//prime ng components
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputNumberModule } from 'primeng/inputnumber';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { OrderListModule } from 'primeng/orderlist';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { MessageModule } from 'primeng/message';
import { MenubarModule } from 'primeng/menubar';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    CreateEventDialogComponent,
    AdminComponent,
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,

    AppRoutingModule,

    ReactiveFormsModule,
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
  ],
  entryComponents: [CreateEventDialogComponent],
  providers: [AdminService, MessageService, CreateEventDialogService, DynamicDialogRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
