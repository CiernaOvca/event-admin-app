import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AdminService } from './admin.service';
import { Observable, of } from 'rxjs';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CreateEventDialogComponent } from './create-event-dialog/create-event-dialog.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [DialogService, MessageService]
})
export class AdminComponent implements OnInit {
  public Math = Math;
  public Date = Date;

  public menuItems: any;
  public eventList: any;
  public tableColumns: any[];
  public pastEvents: number;
  public first: number = 0;
  public totalRecords: number;
  public loading: boolean = false;
  public showPastEvents: boolean = false;
  public displayCreateDialog: boolean = false;
  public ref: DynamicDialogRef;
  public currentDate = new Date();

  private _lastReq: any = {};

  constructor(
    private adminService: AdminService,
    private dialogService: DialogService,
    private messageService: MessageService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    // set the menu bar
    this.menuItems = [
      { label: 'Home', icon: 'pi pi-fw pi-home' },
    ];

    // set the table columns
    this.tableColumns = [
      { field: 'id', display: 'none' },
      { field: 'eventName', header: 'Name' },
      { field: 'peopleNmbr', header: 'Max. number of people' },
      { field: 'dateRange', header: 'Date of the event' },
      { field: 'isPast', display: 'none' },
    ];
    
    this.pastEvents = this.adminService.getNumberOfPastEvents();
    
    // prevent ExpressionChangedAfterItHasBeenCheckedError
    this.cdr.detectChanges();
  }

  // fill the table
  loadData($event: any){
    this._lastReq = $event;
    this.loading = true;
    this.getEventList($event).subscribe((ret) => {
      this.loading = false;
    });
  }

  // show also past events
  handlePastEvents($event: any){
    this._lastReq.first = 0;
    this.first = 1;
    this.loadData(this._lastReq);
  }

  // adjust data - apply filter, sort
  // returns adjusted data
  getEventList(req: any): Observable<any> {
    let result = this.showPastEvents ? this.adminService.getData() : this.adminService.getData().filter(e => e.isPast == false);

    // sort data
    result = this.customSort({field: req.sortField, data: result});

    // filter data
    if(req.globalFilter != null)
      result = result.filter(e => {
        return e.eventName.indexOf(req.globalFilter) >= 0;
      });

    // get number of records which meets the filter
    this.totalRecords = result.length;

    // get requested data
    result = result.slice(req.first, req.first + req.rows);

    this.eventList = result;
    return of(result);
  }

  // sort the data based on user input
  customSort($event: any){
    return $event.data.sort((data1,data2) => {
      let value1 = data1[$event.field];
      let value2 = data2[$event.field];
      let result = null;

      if (value1 == null && value2 != null)
        result = -1;
      else if (value1 != null && value2 == null)
        result = 1;
      else if (value1 == null && value2 == null)
        result = 0;
      else if (typeof value1 === 'string' && typeof value2 === 'string')
        result = value1.localeCompare(value2);
      else if (value1 instanceof Object && value2 instanceof Object)
        result = (value1[0] < value2[0]) ? -1 : (value1[0] > value2[0]) ? 1 : 0;
      else
        result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
      return result;
    });
  }

  // show dialog with details of the event
  showEventDetail($event){
    const data = this.adminService.getEventDetail($event);
    this.showCreateDialog(data);
  }

  // show dialog with the form for creating a new event
  showCreateDialog(data: any){
    const header = data == null ? 'Add new event' : 'Event details'
    this.ref = this.dialogService.open(CreateEventDialogComponent, {
      header: header,
      width: '600px',
      data: data
    });

    this.ref.onClose.subscribe((ret) => {
      if(ret){ 
        this.messageService.add({
          severity:'success', 
          summary:'Event added', 
          detail: 'Event was successfully added', 
          key:'message'
        });
        this.eventList.push(ret);
      }
    })
  }
}
