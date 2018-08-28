import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public canShowActTwo: boolean;
  public canShowActThree: boolean;

  public GetActOneBool(data) {
    this.canShowActTwo = data;
  }

  public GetActTwoBool(data) {
    this.canShowActThree = data;
  }

}
