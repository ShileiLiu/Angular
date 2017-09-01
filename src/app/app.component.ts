import { Component} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.html',
  styleUrls: ['./app.component.css']
})
export class title {
  title = 'Hello World';
  names = ["a","b","c"];
}
