export class DeviceStatus {
    public deviceName: string;
    public status: string;
    public isBuilding: boolean;
    public isDisabled: boolean;

    constructor(DeviceName: string, Status: string, IsBuilding: boolean, IsDisable: boolean) {
        this.deviceName = DeviceName;
        this.status = Status;
        this.isBuilding = IsBuilding;
        this.isDisabled = IsDisable;
    }
}