import { Component, Input, OnInit } from '@angular/core';
import { TimeUpdaterService } from 'src/app/services/time-updater.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-update-date',
  templateUrl: './update-date.component.html',
  styleUrls: ['./update-date.component.scss'],
  providers: [DatePipe]
})
export class UpdateDateComponent implements OnInit {

  // The variable which contain the time on each iteration.
  public updatedTime: string = "12/06/2022 12:00";

  // This variable is used to know on which component is linked this Date time.
  @Input() linkedToComponent: string;

  constructor(private timeUpdater: TimeUpdaterService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.updateActualDate();

    this.timeUpdater.getUpdateTick(this.linkedToComponent).subscribe(tick => {
      this.updateActualDate();
    });
  }

  // This function will get the actual date and format it on a 24h format.
  private updateActualDate(): void {
    this.updatedTime = this.datePipe.transform(new Date(), 'dd/MM/yyyy HH:mm:ss') as string;
  }
}
