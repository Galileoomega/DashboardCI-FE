import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeviceStatus } from '../models/deviceStatus.model';
import { HttpClient } from '@angular/common/http';
import { TestResult } from '../models/testResult.model';

@Injectable({
  providedIn: 'root'
})
export class DataCollectorService {

  private API_URL = "http://bamboo.hach.ewqg.com/rest/api/latest/";

  constructor(private http: HttpClient) { }

  public getDevicesStatus(): Observable<Array<DeviceStatus>> {
    return this.http.get<Array<DeviceStatus>>(this.API_URL + "/getDevicesStatus", {responseType: 'json'});
  }
  
  public getTestsResults(): Observable<Array<TestResult>> {
    return this.http.get<Array<TestResult>>(this.API_URL + "/getTestsResults", {responseType: 'json'});
  }
}
