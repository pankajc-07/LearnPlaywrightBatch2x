// Mini Test Suite Runner

function questionName(input) {
    // ADD YOUR CODE HERE
    const testCases = input;
    const totalTests = testCases.length;

    // Handle empty edge-case scenario safely
    if (totalTests === 0) {
        return "Suite Executed: 0 tests. Status: INCOMPLETE";
    }

    // var: Global counters tracking structural testing states
    var passCount = 0;
    var failCount = 0;
    var errorCount = 0;

    // Array to collect structural strings for each individual test evaluation
    const individualResults = [];
    const passFailStatuses = []; // Helper array tracking boolean outcomes for loops

    // 1. Process all test cases sequentially using a for loop
    for (let i = 0; i < totalTests; i++) {
        const tc = testCases[i];

        // Identifiers and default fallback assignment using Nullish Coalescing (??)
        const name = tc.name ?? "Unnamed Test Case";
        const actual = tc.actual;
        const expected = tc.expected;
        const type = tc.type;

        let tcId = `TC-${String(i + 1).padStart(2, "0")}`;
        let isPassed = false;
        let isError = false;
        let details = "";

        // Switch statement handles different assertion comparison architectures
        switch (type) {
            case "strictEqual":
                isPassed = (actual === expected);
                details = `(${actual} === ${expected})`;
                break;

            case "looseEqual":
                // eslint-disable-next-line eqeqeq
                isPassed = (actual == expected);
                details = `(${actual} == ${expected})`;
                break;

            case "typeCheck":
                isPassed = (typeof actual === expected);
                details = `(typeof ${actual} === "${expected}")`;
                break;

            case "truthy":
                isPassed = !(!actual); // Evaluates truthiness using logical NOT operators
                details = `(Boolean(${actual}) === true)`;
                break;

            case "lessThan":
                isPassed = (actual < expected);
                details = `(${actual} < ${expected})`;
                break;

            default:
                isError = true;
                details = `(Unknown comparison type: ${type})`;
                break;
        }

        // Classify counts using an if-else structure
        if (isError === true) {
            errorCount++;
            passFailStatuses.push("ERROR");
            individualResults.push(`⚠️ ${tcId}: ${name} → ERROR ${details}`);
        } else if (isPassed === true) {
            passCount++;
            passFailStatuses.push("PASS");
            individualResults.push(`✅ ${tcId}: ${name} → PASS ${details}`);
        } else {
            failCount++;
            passFailStatuses.push("FAIL");
            individualResults.push(`❌ ${tcId}: ${name} → FAIL ${details}`);
        }
    }

    // 2. Track consecutive passes from the very beginning using a while loop
    let consecutivePasses = 0;
    let wIndex = 0;
    while (wIndex < totalTests && passFailStatuses[wIndex] === "PASS") {
        consecutivePasses++;
        wIndex++;
    }

    // 3. Find the index of the first failure using a do...while loop
    let firstFailureId = "None";
    let dIndex = 0;
    if (totalTests > 0) {
        do {
            if (passFailStatuses[dIndex] === "FAIL" || passFailStatuses[dIndex] === "ERROR") {
                firstFailureId = `TC-${String(dIndex + 1).padStart(2, "0")}`;
                break; // Stop immediately once isolated
            }
            dIndex++;
        } while (dIndex < totalTests);
    }

    // 4. Calculate final metrics
    const passRateNum = (passCount / totalTests) * 100;
    const passRate = passRateNum.toFixed(2) + "%";

    // Ternary operator evaluates final health verdict status
    const suiteVerdict = (failCount === 0 && errorCount === 0) ? "✅ PASSED" : "❌ FAILED";

    // 5. Construct the comprehensive summary payload string
    const logs = individualResults.join(" ");
    const summary = `Summary Report → Total: ${totalTests} Passed: ${passCount} Failed: ${failCount} Errors: ${errorCount} Consecutive Passes: ${consecutivePasses} First Failure: ${firstFailureId} Pass Rate: ${passRate} Overall: ${suiteVerdict}`;

    let answer = `${logs} | ${summary}`;
    return answer;
}