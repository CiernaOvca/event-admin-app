TableState - keeps the state of the table, so that when the page is visited again, table will render the data using its last settings
stateStorage="session"
stateKey="state-session"


<p-dialog header="Preview of events" [(visible)]="displayCalendar" position="top">
    <p-calendar 
        name="deadline"
        [inline]="true" 
        selectionMode="multiple" 
        (onSelect)="onSelect($event)" 
        dateFormat="dd.mm.yy">
    </p-calendar>
</p-dialog>

required(control) {        return isEmptyInputValue(control.value) ? { 'required': true } : null;    }