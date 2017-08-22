# Angularjs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

在ng里如果使用过个指令需要template标签来帮助例如同时使用ngfor和ngif
template解析ngfor指令，li解析ngif指令，同时使用两个指令在一个元素会造成混乱
<ng-template ngFor let-name [ngForOf]="names" let-i="index"><li *ngIf="name=='a'">{{name}}</li></ng-template>

*ngFor指令的用法

*ngFor="let i of name";

类似Vue的 v-for用法，只不过，一个是in，一个是of,一个需要let  一个不需要。同时，ngFor可以多次嵌套

*ngIf指令的用法
*ngIf="true"
类似Vue的V-if用法，


