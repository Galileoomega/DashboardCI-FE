import { Component, OnInit, Input } from '@angular/core';
import { DeviceStatus } from 'src/app/models/deviceStatus.model';

@Component({
  selector: 'app-device-status',
  templateUrl: './device-status.component.html',
  styleUrls: ['./device-status.component.scss']
})
export class DeviceStatusComponent implements OnInit {

  @Input() public listOfDevicesStatus: Array<DeviceStatus>;

  constructor() { }

  ngOnInit(): void {
  }

}
