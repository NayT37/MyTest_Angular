import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-activity-two',
  templateUrl: './activity-two.component.html',
  styleUrls: ['./activity-two.component.css']
})
export class ActivityTwoComponent implements OnInit {

  public canShowActThree: boolean;
  @Output() actTwoEvent: EventEmitter<boolean> = new EventEmitter();
  constructor() {
    this.canShowActThree = true;
    //this.actTwoEvent = new EventEmitter();
  }

  ngOnInit() {
  }

  public ShowNextAct() {
    console.log("Im showing something");
    this.actTwoEvent.emit(true);
  }

}
