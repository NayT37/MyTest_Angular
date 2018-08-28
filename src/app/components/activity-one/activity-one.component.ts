import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-activity-one',
  templateUrl: './activity-one.component.html',
  styleUrls: ['./activity-one.component.css']
})
export class ActivityOneComponent implements OnInit {

  public canShowActTwo: boolean;
  @Output() actOneEvent: EventEmitter<boolean> = new EventEmitter();

  constructor() {
    this.canShowActTwo = true;
   // this.actOneEvent = new EventEmitter();
  }

  ngOnInit() {
  }

  public ShowNextAct() {
    console.log("Im showing something");
    this.actOneEvent.emit(true);
  }
}
