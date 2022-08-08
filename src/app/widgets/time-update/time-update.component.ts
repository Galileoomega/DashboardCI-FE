import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-update',
  templateUrl: './time-update.component.html',
  styleUrls: ['./time-update.component.scss']
})
export class TimeUpdateComponent implements OnInit {

  public updatedTime: string = "12/06/2022 12:00";

  constructor() { }

  ngOnInit(): void {
  }
}
