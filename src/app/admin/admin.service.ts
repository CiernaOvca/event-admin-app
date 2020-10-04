import { Injectable } from "@angular/core";

@Injectable()
export class AdminService {
  // simulates API Get call to BE
  // returns example of data
  getData(){
    return [
      { id: 1, eventName: 'Slovenské zdravotníctvo 2020', privateEvent: false, peopleNmbr: 5, dateRange: [new Date('2020-10-15'), new Date('2020-10-20')], eventTime: '10:00', eventPlace: 'S4', isPast: false },
      { id: 2, eventName: 'Lote 2020, Back to Normal', privateEvent: true, peopleNmbr: 10, dateRange: [new Date('2020-12-12'), new Date('2020-12-12')], eventTime: '10:00', eventPlace: 'S2', isPast: false },
      { id: 3, eventName: 'November, Month of Photography', privateEvent: false, peopleNmbr: 10, dateRange: [new Date('2020-11-12'), new Date('2020-11-15')], eventTime: '10:00', eventPlace: 'S3', isPast: false },
      { id: 4, eventName: 'Fjuzn - Festival of Minorities', privateEvent: false, peopleNmbr: 65, dateRange: [new Date('2020-11-17'), new Date('2020-11-18')], eventTime: '10:00', eventPlace: 'H', isPast: false },
      { id: 5, eventName: 'Charity Christmas', privateEvent: false, peopleNmbr: 45, dateRange: [new Date('2020-12-20'), new Date('2020-12-23')], eventTime: '10:00', eventPlace: 'KB', isPast: false },
      { id: 6, eventName: 'Slovenské klimatické fórum 2020', privateEvent: true, peopleNmbr: 30, dateRange: [new Date('2021-01-30'), new Date('2021-02-02')], eventTime: '10:00', eventPlace: 'KB', isPast: false },
      { id: 7, eventName: 'EY Conference', privateEvent: true, peopleNmbr: 15, dateRange: [new Date('2021-02-23'), new Date('2021-02-28')], eventTime: '10:00', eventPlace: 'LX', isPast: false },
      { id: 8, eventName: 'White night', privateEvent: false, peopleNmbr: 80, dateRange: [new Date('2021-05-17'), new Date('2021-05-30')], eventTime: '10:00', eventPlace: 'H', isPast: false },
      { id: 9, eventName: 'Ako zmení koronakríza realitný trh', privateEvent: false, peopleNmbr: 25, dateRange: [new Date('2020-09-01'), new Date('2020-09-10')], eventTime: '10:00', eventPlace: 'LZ', isPast: true },
      { id: 10, eventName: 'High-end event', privateEvent: true, peopleNmbr: 5, dateRange: [new Date('2020-08-30'), new Date('2020-08-30')], eventTime: '10:00', eventPlace: 'S4', isPast: true },
      { id: 11, eventName: 'Annual meetup', privateEvent: true, peopleNmbr: 15, dateRange: [new Date('2020-09-12'), new Date('2020-09-15')], eventTime: '10:00', eventPlace: 'LX', isPast: true },
      { id: 12, eventName: 'Street food park', privateEvent: false, peopleNmbr: 70, dateRange: [new Date('2020-08-12'), new Date('2020-08-17')], eventTime: '10:00', eventPlace: 'H', isPast: true },
    ];
  }

  // simulates API Get call to BE 
  // returns detail of an event
  getEventDetail(eventId){
    const data = this.getData().filter(e => e.id == eventId)[0];
    return {
      eventName: data.eventName,
      eventPlace: data.eventPlace,
      privateEvent: data.privateEvent,
      peopleNmbr: data.peopleNmbr,
      dateRange: data.dateRange,
      eventTime: data.eventTime,
    };
  }

  // retuns number of past events
  getNumberOfPastEvents(){
    return this.getData().filter(e => e.isPast).length;
  }
}