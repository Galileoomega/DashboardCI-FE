export class TestResult {
    public planName: string;
    public planBranch: string;
    public planBuildNumber: string;
    public planDateOfBuild: string;
    public testValid: boolean;
    public testResult: string;

    constructor(PlanName: string, PlanBranch: string, PlanBuildNumber: string, PlanDateOfBuild: string, TestValid: boolean, TestResult: string) {
        this.planName = PlanName;
        this.planBranch = PlanBranch;
        this.planBuildNumber = PlanBuildNumber;
        this.planDateOfBuild = PlanDateOfBuild;
        this.testValid = TestValid;
        this.testResult = TestResult;
    }
}