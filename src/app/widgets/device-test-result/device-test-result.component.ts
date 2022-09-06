import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TestResult } from 'src/app/models/testResult.model';
import { DataCollectorService } from 'src/app/services/data-collector.service';
import { TimeUpdaterService } from 'src/app/services/time-updater.service';

@Component({
  selector: 'app-device-test-result',
  templateUrl: './device-test-result.component.html',
  styleUrls: ['./device-test-result.component.scss']
})
export class DeviceTestResultComponent implements OnInit {

  public listOfTestsResults: Array<TestResult> = [];

  // Retrieve the test plan informations.
  @Input() public testPlanInfos: TestResult;

  // The path to the icons of the devices.
  public iconPath: string = "assets/img/tests/";

  // Regex variables. They will be used to find the correct image for the plan name.
  private seaCloudRegex = new RegExp("SeaCloud");
  private eagleRegex = new RegExp("Eagle");
  
  constructor(private timeUpdater: TimeUpdaterService, private dataCollector: DataCollectorService) { }

  ngOnInit(): void {
    this.getTestsResults();
      
    this.timeUpdater.getUpdateTick("testPlan").subscribe({
      next: value => {
        this.getTestsResults();
        console.log("Updated")
      }
    });
  }

  private getTestsResults(): void {
    this.dataCollector.getTestsResults().subscribe(response => {
      this.listOfTestsResults = response;
      console.log(response)
    });
  }

  // This function search the device name in the plan name and add the icon name to the full path.
  // Require one argument : The full name of the plan. 
  public matchIconWithPlanName(planName: string): string {
    let deviceIcon = this.iconPath;

    // Check for SeaCloud.
    if(this.seaCloudRegex.test(planName)) {  
      deviceIcon += "SC4200.png";
    }
    // Check for Eagle.
    else if(this.eagleRegex.test(planName)) {  
      deviceIcon += "eagle.png";
    }
    // If not add the FPM icon.
    else {  
      deviceIcon += "SC1500.png";
    }

    return deviceIcon;
  }
}