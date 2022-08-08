import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TestResult } from 'src/app/models/testResult.model';

@Component({
  selector: 'app-device-test-result',
  templateUrl: './device-test-result.component.html',
  styleUrls: ['./device-test-result.component.scss']
})
export class DeviceTestResultComponent implements OnInit {

  // Retrieve the test plan informations.
  @Input() public testPlanInfos: TestResult;

  // The path to the icons of the devices.
  public iconPath: string = "assets/img/tests/";

  // Regex variables. They will be used to find the correct image for the plan name.
  private seaCloudRegex = new RegExp("SeaCloud");
  private eagleRegex = new RegExp("Eagle");
  
  constructor() { }

  ngOnInit(): void {
    this.matchIconWithPlanName(this.testPlanInfos.planName);
  }

  // This function search the device name in the plan name and add the icon name to the full path.
  // Require one argument : The full name of the plan. 
  private matchIconWithPlanName(planName: string): void {
    // Check for SeaCloud.
    if(this.seaCloudRegex.test(planName)) {  
      this.iconPath += "SC4200.png";
    }
    // Check for Eagle.
    else if(this.eagleRegex.test(planName)) {  
      this.iconPath += "eagle.png";
    }
    // If not add the FPM icon.
    else {  
      this.iconPath += "SC1500.png";
    }
  }
}