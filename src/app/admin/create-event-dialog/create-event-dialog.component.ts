import { Component, OnInit, OnDestroy } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api/';
import { CreateEventDialogService } from './create-event-dialog.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-event-dialog.component.html',
  styleUrls: ['./create-event-dialog.component.css'],
})

export class CreateEventDialogComponent implements OnInit, OnDestroy {
  public rangeDates;
  public pocetOsob;
  public value20 = 0;
  public createEventFormGroup: FormGroup;
  public privateEventOptions: SelectItem[];
  public placesList: any[];
  public maxPpl: number = 9999;
  public disabledDates = new Array<Date>();
  public showDateOverlayError: boolean = false;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private createEventService: CreateEventDialogService,
    private adminService: AdminService,
  ) {}

  ngOnInit(){
    this.createEventFormGroup = new FormGroup({
      eventName: new FormControl(null, Validators.required),
      eventPlace: new FormControl(null, Validators.required),
      eventTime: new FormControl('08:00', Validators.required),
      peopleNmbr: new FormControl(1, Validators.required),
      dateRange: new FormControl([new Date(), new Date()], Validators.required),
      privateEvent: new FormControl(true),
    });

    this.privateEventOptions = [{label: 'Ano', value: true}, {label: 'Nie', value: false}];
    this.placesList = this.createEventService.getDataForDropdown();
    
    if(this.config.data){
      this.createEventFormGroup.setValue(this.config.data);
    }

    this.createEventService.getDataForDropdown();
  }

  // sets max number of people for the input component
  // if there is any existing event within the same place, disable those dates
  changedPlace(){
    const value = this.createEventFormGroup.controls.eventPlace.value;
    if(value != null){
      // set the maximum number of people according to the place's capacity
      const place = this.createEventService.getPlaceList().filter(p => p.value == value)[0];
      this.maxPpl = place.capacity;

      // if there already is an event for the chosen place, disable its dates in calendar
      const dates = this.adminService.getData().filter(e => e.eventPlace == value).map(e => e.dateRange);
      if(dates != null) {
        dates.forEach(item => {
          const numberOfDays = Math.ceil(item[1].getTime() - item[0].getTime()) / (1000*3600*24);
          for(var i = 0; i <= numberOfDays; i++){
            var date = new Date(item[0]);
            date.setDate(date.getDate() + i);
            this.disabledDates.push(date);
          }
        });
      }
    }
  }

  // returns true if there is an overlay in dates with an existing event
  changedDates(): boolean{
    const values = this.createEventFormGroup.controls.dateRange.value;
    const room = this.createEventFormGroup.controls.eventPlace.value;

    // check if there is an overlay of dates with existing events
    // validation runs in case the user chose dates and only after chose a place (disabled dates are not in place yet)
    if(room != null){
      let result = this.adminService
                        .getData()
                        .filter(e => e.eventPlace == room && 
                                (values[0] > e.dateRange[0] && values[0] < e.dateRange[1]) ||
                                (e.dateRange[0] > values[0] && e.dateRange[0] < values[1]) ||
                                (values[1] > e.dateRange[0] && values[1] < e.dateRange[1]) || 
                                (e.dateRange[1] > values[0] && e.dateRange[1] < values[1]) );
      if(result.length > 0){ 
        console.log('error');
        this.createEventFormGroup.controls['dateRange'].setErrors({'incorrect': true});
        this.showDateOverlayError = true;
        return true;
      }
      else{
        console.log('not anymore');
        this.createEventFormGroup.controls['dateRange'].setErrors(null);
        this.showDateOverlayError = false;
        return false;
      }
    }
  }

  closeDialog($event: any){
    if (!this.changedDates())
      this.ref.close(this.createEventFormGroup.value);
  }

  ngOnDestroy(){
  }
}