import { Component } from '@angular/core';
import { DeviceStatus } from './models/deviceStatus.model';
import { TestResult } from './models/testResult.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboardCI';

  public listOfTestsResults: Array<TestResult> = [
    new TestResult("Fusion FCC Eagle Nighly", "Master", "3866", "28.06.2022  02:06", false, "unit test has failed"),
    new TestResult("Fusion FCC SeaCloud Nightly", "Release/MSM_r2022_1_candidate", "3866", "28.06.2022  02:06", true, ""),
    new TestResult("Fusion FCC FPM Nightly", "Release/MSM_r2022_1_candidate", "3866", "28.06.2022  02:06", true, ""),
    new TestResult("Fusion FCC SeaCloud Daily", "Release/MSM_r2022_1_candidate", "3866", "28.06.2022  02:06", true, "")
  ];

  public listOfDevicesStatus: Array<DeviceStatus> = [
    new DeviceStatus("Seacloud 1", "Idle", false, false),
    new DeviceStatus("Seacloud 2", "FUS-EAGFW32-LT-181", true, false),
    new DeviceStatus("Seacloud 3", "Idle", false, false),
    new DeviceStatus("Seacloud 4", "Idle", false, false),
    new DeviceStatus("Seacloud 5", "GD:unreachable", false, true),
    new DeviceStatus("Seacloud 6", "Idle", false, false),
    new DeviceStatus("Seacloud 7", "Idle", false, false),
    new DeviceStatus("Seacloud 8", "Idle", false, false),
    new DeviceStatus("Seacloud 9", "Idle", false, false),
    new DeviceStatus("Seacloud 10", "Idle", false, false),
    new DeviceStatus("Seacloud 11", "Idle", false, false),
    new DeviceStatus("Seacloud 12", "Idle", false, false)
  ];
}