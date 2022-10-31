import { Component } from '@angular/core';
import {SomeService} from "./some.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public someService: SomeService) {
  }
}
