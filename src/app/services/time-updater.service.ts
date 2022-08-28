// This class is used to provide a time tick to refresh the results in the dashboard.

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeUpdaterService {

  // Interval of 30.000ms => 30s
  private DEVICE_STATUS_INTERVAL: number = 30000;

  // Interval of 10.000ms => 10s
  private PLAN_RESULT_INTERVAL: number = 10000;

  constructor() { }

  public getUpdateTick(component: string): any {
    const interval = period => new Observable(observer => {
      let i = 0;
      setInterval(() => observer.next(i++), period);
    });
    
    if(component === "deviceStatus") {
      return interval(this.DEVICE_STATUS_INTERVAL);
    }
    else if(component === "testPlan") {
      return interval(this.PLAN_RESULT_INTERVAL);
    }
    else {
      return false;
    }
  }
}
