export class TestResult {
    public planName: string;
    public planBranch: string;
    public planBuildNumber: string;
    public planDateOfBuild: string;
    public buildFailed: boolean;
    public unitTestFailed: boolean;

    constructor(PlanName: string, PlanBranch: string, PlanBuildNumber: string, PlanDateOfBuild: string, BuildFailed: boolean, UnitTestFailed: boolean) {
        this.planName = PlanName;
        this.planBranch = PlanBranch;
        this.planBuildNumber = PlanBuildNumber;
        this.planDateOfBuild = PlanDateOfBuild;
        this.buildFailed = BuildFailed;
        this.unitTestFailed = UnitTestFailed;
    }
}