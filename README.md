# EventAdminApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.2.
App is using primeng - UI Component Library (https://primefaces.org/primeng/showcase/#/). Added with:
`npm install primeng --save`
`npm install primeicons --save`

Other packages installed: 
@angular/core
@angular/common
@angular/cdk
rxjs
rxjs/operators
primeflex


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test --source-map=false` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Summary and other comments
V aplikacii sa pouzivaju oba typy formov - template-driven (obrazovka s prehladom) a reactive forms (dialog pre vytvaranie udalosti a zobrazovania jej detailu).
Prva obrazovka obsahuje prehlad udalosti, pricom si pouzivatel moze zobrazit aj predosle udalosti. Tieto udalosti su odlisene od aktualnych tagom "past event". 
Prehlad obsahuje filter podla nazvu udalosti a rozne sortovacie moznosti.
Pouzivatel moze vytvorit novu udalost, kde je potrebne zadat nazov udalosti, vybrat miesto konania udalosti, datum konania a jej zaciatok a urcit, ci ide o sukromnu udalost alebo nie. 
Pri zvoleni miesta konania sa upravi kalendar podla toho, ci uz existuje udalost, ktora sa kona na rovnakom mieste. V pripade, ze ano, vezme sa datum tejto existujucej udalosti a v kalendari sa zablokuje ich vyber, aby sa predislo kolizii na rovnakom mieste. V aplikacii je osetreny aj pripad, kedy pouzivatel najprv zada datum konania a az potom zvoli miesto konania (zobrazenie chybovej hlasky).

V aplikacii je pouzita kniznica componentov PrimeNG, pre jednoduchsie a rychlejsie vytvaranie obrazoviek. 

Back-end nie je implementovany ziadnym sposobom, preto funkcie v jednotlivych services su len simulacie API volani. 
Funkcia na pridanie eventu je len docasna, nakolko sa data ukladaju v premennych. 
Ostatne funkcie, ktore narabaju s datami, by boli taktiez presunute na BE.

Pre kazdy component je vytvoreny testovaci subor, ktory obsahuje zakladne testy. Testovacie scenare pre Angular aplikaciu som vytvarala prvy krat, preto su jednoduchsie a pokryvaju iba zakladne veci. 
