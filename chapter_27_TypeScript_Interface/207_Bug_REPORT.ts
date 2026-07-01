interface BugReport {
    id: number;
    title: string;
    severity: string;
    stepsToReproduct: string[];
}

const bugReport1: BugReport = {
    id: 1,
    title: "title",
    severity: "High",
    stepsToReproduct: ["step1", "step2"]
}

const bugReport2: BugReport = {
    id: 2,
    title: "title",
    severity: "High",
    stepsToReproduct: ["step1", "step2"]
}

const bugReport3: BugReport = {
    id: 3,
    title: "title",
    severity: "High",
    stepsToReproduct: ["step1", "step2"]
}