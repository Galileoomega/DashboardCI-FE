import { Component } from '@angular/core';
import { DeviceStatus } from './models/deviceStatus.model';
import { TestResult } from './models/testResult.model';
import { DataCollectorService } from './services/data-collector.service';

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

  constructor(private dataCollector: DataCollectorService) {}

  ngOnInit(): void {}
}