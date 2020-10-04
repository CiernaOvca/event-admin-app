export class CreateEventDialogService{
  // simulates API call for data
  // returns array of places
  getPlaceList(){
    return [
      { label: 'Salonik 1', value: 'S1', capacity: 5 },
      { label: 'Salonik 2', value: 'S2', capacity: 10 },
      { label: 'Salonik 3', value: 'S3', capacity: 10 },
      { label: 'Salonik 4', value: 'S4', capacity: 5 },
      { label: 'Konferencna miestnost A', value: 'KA', capacity: 60 },
      { label: 'Konferencna miestnost B', value: 'KB', capacity: 45 },
      { label: 'Lounge X', value: 'LX', capacity: 15 },
      { label: 'Lounge Z', value: 'LZ', capacity: 25 },
      { label: 'Hala', value: 'H', capacity: 100 },
    ]
  }

  // adjusts data for dropdown
  getDataForDropdown(){
    const data = this.getPlaceList();
    return [
      {
        label: 'Kapacita do 5 ludi', value: '',
        items: data.filter(p => p.capacity <= 5)
      },
      {
        label: 'Kapacita do 15 ludi', value: '',
        items: data.filter(p => p.capacity > 5 && p.capacity <= 15)
      },
      {
        label: 'Kapacita 25 a viac ludi', value: '',
        items: data.filter(p => p.capacity >= 25)
      },
    ];
  }
}