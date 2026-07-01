enum TestStatus {
    Pass = "PASS",
    Fail = "FAIL",
    Skip = "SKIP",
    Pending = "PENDING",
    Blocked = "BLOCKED"
}
console.log(TestStatus.Pass);
console.log("**************************");

enum Status {
    Pass,
    Fiil,
    Skip,
}
console.log(Status.Pass);
console.log(Status.Fiil);
console.log(Status.Skip);
console.log("**************************");

enum Status01 {
    P = "PASS",
    F = "FAIL",
    S = "SKIP",
    B = "BLOCKED",
}

console.log(Status01.S);
console.log(Status01.B);
console.log(Status01.F);
console.log(Status01.P);
console.log("**************************");
