import { Component, OnInit, Input } from '@angular/core';
import { DeviceStatus } from 'src/app/models/deviceStatus.model';
import { DataCollectorService } from 'src/app/services/data-collector.service';
import { TimeUpdaterService } from 'src/app/services/time-updater.service';

@Component({
  selector: 'app-device-status',
  templateUrl: './device-status.component.html',
  styleUrls: ['./device-status.component.scss']
})
export class DeviceStatusComponent implements OnInit {

  public listOfDevicesStatus: Array<DeviceStatus>;

  constructor(private dataCollector: DataCollectorService, private timeUpdater: TimeUpdaterService) { }

  ngOnInit(): void {
    this.getDevicesStatusResults();
    
    this.timeUpdater.getUpdateTick("deviceStatus").subscribe({
      next: value => {
        this.getDevicesStatusResults();
      }
    });
  }

  private getDevicesStatusResults(): void {
    this.dataCollector.getDevicesStatus().subscribe(response => {
      this.listOfDevicesStatus = response;
    });
  }
}
