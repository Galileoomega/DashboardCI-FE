export class TestResult {
    public planName: string;
    public planBranch: string;
    public planBuildNumber: string;
    public planDateOfBuild: string;

    constructor(PlanName: string, PlanBranch: string, PlanBuildNumber: string, PlanDateOfBuild: string) {
        this.planName = PlanName;
        this.planBranch = PlanBranch;
        this.planBuildNumber = PlanBuildNumber;
        this.planDateOfBuild = PlanDateOfBuild;
    }
}